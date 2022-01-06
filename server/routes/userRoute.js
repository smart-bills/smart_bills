const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });
const { check, validationResult } = require('express-validator');
const jwtSecret = process.env.jwtSecret;

const User = require('../models/User');

// @route   POST app/users
// @desc    Register User
// @access  Public (no token needed)
router.post(
	'',
	[
		check('userName', 'Name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		// Check if requirements are met
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// destructure req.body
		const { userName, email, password } = req.body;
		try {
			// See if user exists
			let user = await User.findOne({ email });
			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] });
			}
			user = new User({
				userName,
				email,
				password,
			});
      
			// Encrypt password
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();

			// Return jsonwebtoken
			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(payload, `${jwtSecret}`, { expiresIn: 360000 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;
