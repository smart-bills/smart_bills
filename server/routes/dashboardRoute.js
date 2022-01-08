const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Bill = require('../models/bill');

// @route   Get app/dashboard/user/:id
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


module.exports = router;