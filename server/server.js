const express = require('express');
const cors = require('cors');
const parseReceipt = require('./ocr');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000
// const upload = require('./uploadBill');
// const User = require('../models/user');
// const connectDB = require('./mongodb');
// const dotenv = require('dotenv')
const app = express();
const routesUrls = require('./routes/userRoute')
const {dbKey} = require('../secrets')

app.use(cors());
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.get('/', (req, res) => {
    res.send('Hi');
});

app.post('/billImage', async (req, res) => {
    console.log('Received a receipt.')
    const receiptString = req.body.file;
    await parseReceipt(receiptString);
    // const dishes = await parseReceipt(receiptString);
    // console.log(dishes);
});

app.use('/app', routesUrls)
app.listen(PORT, () => {
    console.log(`Backend is connected now: ${new Date()}`);
    mongoose.connect(dbKey, () => console.log (`Database is connected now: ${new Date()}`));
});