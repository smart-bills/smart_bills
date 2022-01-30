const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Bill = require('../models/bill');

const sgMail = require('@sendgrid/mail');
const mail = require('../mail/template');
const { calc_bill, calc_dish } = require('../calculator');
require('dotenv').config({ path: '../../../.env' });
const API_KEY = process.env.SG_API_KEY;

// @route   GET app/dashboard/user
// @desc    Get all of the user's bill
// @access  Private
router.get('/user', auth, async (req, res) => {
	try {
		const bill = await Bill.find({ hostID: req.user.id }).populate('hostID', [
			'userName',
		]);
		if (!bill) return res.status(400).json({ message: 'Bill not found' });
		res.json(bill);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route   PUT app/dashboard/paid/:bill_id
// @desc    Mark bill as paid
// @access  Private
router.put('/paid/', auth, async (req, res) => {
	try {
		let body = req.body.billid;
		const bill = await Bill.findById(body);
		// Check if bill has already been marked as paid
		if (bill.paid === true) {
			return res.status(400).json({ msg: 'Bill has already been paid' });
		}
		bill.paid = true;
		await bill.save();
		res.json(bill);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});
// @route   PUT app/dashboard/unpaid/:bill_id
// @desc    Mark bill as unpaid
// @access  Private
router.put('/unpaid/', auth, async (req, res) => {
	try {
		let body = req.body.billid;
		const bill = await Bill.findById(body);
		// Check if bill has already been marked as unpaid
		if (bill.paid === false) {
			return res.status(400).json({ msg: 'Bill is currently unpaid' });
		}
		bill.paid = false;
		await bill.save();
		res.json(bill);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route   POST app/dashboard/email
// @desc    Send email to the invitees
// @access  Private
router.post('/email', auth, async (req, res) => {
	sgMail.setApiKey(API_KEY);

	const Emails = req.body.email;
	const Store = req.body.storeName;
	const Dishes = req.body.dishes;
	const Tax = parseFloat(req.body.tax);
	const Tips = parseFloat(req.body.tips);
	const Amount = parseFloat(req.body.amount);
	const Split = req.body.split;

	try {
		if (Split == 'Split by People') {
			let headcount = Emails.length + 1;
			const Bill = calc_bill(Amount, Tax, Tips, headcount);
			Emails.forEach(toEmail => {
				const message = {
					from: 'smart-bills@outlook.com',
					to: toEmail,
					subject: 'Smart-Bills',
					html: mail.bill_message(Store, Bill),
				};
				sgMail
					.send(message)
					.then(response => console.log('Email is sent'))
					.catch(error => console.log(error.message));
			});
		} else {
			const headcount = Dishes.length + 1;
			Dishes.forEach(dish => {
				let price = parseFloat(dish.amount);
				let bill = calc_dish(Amount, price, Tips, Tax, headcount);
				const message = {
					to: dish.userEmail,
					from: 'smart-bills@outlook.com',
					subject: 'Smart-Bills',
					html: mail.dish_message(Store, dish.dishName, bill),
				};

				sgMail
					.send(message)
					.then(response => console.log('Email is sent'))
					.catch(error => console.log(error.message));
			});
		}

		res.send(`Email sent`);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
