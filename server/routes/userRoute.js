const express = require('express')
const router = express.Router()
const User = require('../models/user');


router.post('/signup', async(req, res) =>{
    
    const signedUpUser = await new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password
    })
    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
});
router.get('/user', async(req, res) =>{
    try{
        const user = await User.find()
        res.send(user)
    }
    catch(err){
        console.log(err)
    }
})
module.exports = router;
