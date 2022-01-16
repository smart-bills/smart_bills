const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });
const jwtSecret = process.env.jwtSecret;
const { check, validationResult } = require('express-validator');

const User = require('../models/user');
const auth = require('../middleware/auth');

// @route   GET app/auth
// @desc    Get user by token
// @access  Private
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route   POST app/auth
// @desc    Login user & Return JWT token
// @access  Public (no token needed)
router.post(
	'/',
	[
		check('email', 'Please provide a valid email.').isEmail(),
		check('password', 'Password is required.').exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.json({ errors: errors.array() });
		}

		const { email, password } = req.body;
		try {
			/* See if user exists */
			let user = await User.findOne({ email });
			if (!user) return res.json({ error: 'Invalid Credentials.'});
			
			/* Check if the user matches the password */
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) return res.json({ error: 'Invalid Credentials.'});
			
			/* Return jsonwebtoken */
			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(payload, `${jwtSecret}`, { expiresIn: 360000 }, (err, token) => {
				if (err) throw err;
				res.status(200).json({ token });
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);
module.exports = router;
