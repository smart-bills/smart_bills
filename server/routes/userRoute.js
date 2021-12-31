const express = require('express')
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/signup', async(req, res) => {
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
        res.status(400).json({ message: `${err}`});
    }
});

router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });

        if(!user) {
            console.log('No such an user');
            return;
        }
        
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(isPasswordCorrect) {
            console.log('User has logged in');
            return;
        }     
    } catch(err) {
        console.log(err);
    }
})

module.exports = router;