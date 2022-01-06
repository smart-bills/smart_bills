const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: '../.env'});
const secretKey = process.env.secretKey;

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
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword
        });

        res.json({ message: 'User has been registered.'});
    } catch(err) { res.json({ message: `${err}`}); }
});

router.post('/login', async (req, res) => {
	const user = await User.findOne({email: req.body.email});
	if (!user)	return { status: 'error', error: 'Invalid login' };
	
	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign({email: user.email}, secretKey);
		res.json({ status: 'ok', user: token });
	} else {
        console.log('Wrong password');
		res.json({ status: 'error', user: false });
	}
})

module.exports = router;