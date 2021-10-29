const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb')
const moogoose = require('mongoose')
const User = require('../models/user')

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", require("../src/routes/userRoute"));
app.get('/', async(req, res, next) =>
{
    try {
        const result = await User.find();
        res.send(result);   
    } catch (error) {
        console.error(error)
    }
})

app.get('/user', async(req, res, next) =>
{
    // const user = new User({
    //     userID: 'HEllo',
    //     email: 'yo@gmail.com',
    //     name: 'Testing name',
    //     password: 'Testing password'
    // })
    
    try {
        const result = await user.save();
        res.send(result);   
    } catch (error) {
        console.error(error)
    }
})

app.listen(8000, () => {
    connectDB();
    console.log('Both database and backend are running now.')
});

