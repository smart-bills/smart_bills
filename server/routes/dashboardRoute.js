const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Bill = require('../models/bill');

// @route   GET app/dashboard/user
// @desc    Get the all of the user's bill
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
router.put('/paid/:bill_id', auth, async (req, res) => {
	try {
		const bill = await Bill.findById(req.params.bill_id);
		// Check if bill has already been marked as paid
		if (bill.paid.toString() === true) {
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
router.put('/unpaid/:bill_id', auth, async (req, res) => {
	try {
		const bill = await Bill.findById(req.params.bill_id);
		// Check if bill has already been marked as unpaid
		if (bill.paid.toString() === false) {
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

module.exports = router;
