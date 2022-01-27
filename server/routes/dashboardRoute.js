const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Bill = require('../models/bill');
const sender = process.env.email;
const pw = process.env.password;
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '../../../.env' });

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
	try {
		const transporter = nodemailer.createTransport({
			pool: true,
			maxConnections: 1,
			maxMessage: 1,
			service: 'hotmail',
			auth: {
				user: sender,
				pass: pw,
			},
		});

		const Emails = req.body.email;
		const Store = req.body.storeName;
		const Amount = req.body.amount;

		Emails.forEach(toEmail => {
			const options = {
				from: sender,
				to: toEmail,
				subject: 'Smart-Bills',
				text: `Split bill at ${Store} for ${Amount}`,
			};

			transporter.sendMail(options, function (err, info) {
				if (err) {
					return console.log(err);
				} else {
					console.log('Sent:' + info.response);
				}
			});
		});
		res.send(`Email sented`);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});
module.exports = router;
