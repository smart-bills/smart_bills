const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Bill = require('../models/bill');
const User = require('../models/user');

// @route   Get app/dashboard/:id
// @desc    Get the user name
// @access  Private
router.get('/:id', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user.userName);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
