const express = require('express');
const cors = require('cors');
const connectDB = require('./mongodb');
const parseReceipt = require('./ocr');
const moogoose = require('mongoose');
const User = require('../models/user');
// const upload = require('./uploadBill');
const app = express();

app.use(cors());
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.get('/', async(req, res) => {
    res.send('Hi')
});

app.post('/billImage', async(req, res) => {
    console.log(req.body);

    // const dishes = await parseReceipt('../testingReceipt.jpg');
    // console.log(dishes);
});

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
