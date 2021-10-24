const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb')
const parseReceipt = require('./ocr')
const moogoose = require('mongoose')
const User = require('../models/user')


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async(req, res) =>
{
    const dishes = await parseReceipt('../testingReceipt.jpg');
    console.log(dishes);
    res.send('Hi')
})

app.get('/user', async(req, res) =>
{
    const user = new User({
        userID: 'HEllo',
        email: 'yo@gmail.com',
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

// async function startParsing()
// {
//     await parseReceipt('./testingReceipt.jpg');
// }