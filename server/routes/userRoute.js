const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/signup', async(req, res) => {
    const user = await User.findOne({email: req.body.email});

    if(user) {
        res.json({message: 'User is already registered', isRegistered: true});
        return;
    }
    
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword
        });

        res.status(200).json({ message: 'User has been registered.'});
    } catch(err) {
        res.json({ message: `${err}`});
    }
});


router.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)
        console.log('User has logged in');
		return res.json({ status: 'ok', user: token })
	} else {
        console.log('Wrong password');
		return res.json({ status: 'error', user: false })
	}
})
module.exports = router;