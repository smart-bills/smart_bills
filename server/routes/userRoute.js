const express = require('express')
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/signup', async(req, res) => {
    
    const signedUpUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(signedUpUser.password, salt);
        signedUpUser.password = hashedPassword;
    } catch (error) {
        throw(error);
    }
    
    signedUpUser.save()
        .then(data => {
            res.json(data);
            res.redirect('http://localhost:3000');
        })
        .catch(error => res.json(error))

});

router.get('/user', async(req, res) => {
    try{
        const user = await User.find()
        res.send(user)
    }
    catch(err){
        console.log(err)
    }
})
module.exports = router;
