const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb')
const moogoose = require('mongoose')
const User = require('../models/user')

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>
{
    res.send('Backend running');
})

app.get('/user', async(req, res) =>
{
    const user = new User({
        userID: 'Testing',
        email: 'Testing@gmail.com',
        name: 'Testing name',
        password: 'Testing password'
    })
    
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