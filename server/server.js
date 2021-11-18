const express = require('express');
const cors = require('cors');
// const connectDB = require('./mongodb');
const parseReceipt = require('./ocr');
const mongoose = require('mongoose');
//const User = require('../models/user');
const PORT = process.env.PORT || 8000
// const upload = require('./uploadBill');
const app = express();
const routesUrls = require('./routes/userRoute')
const {dbKey} = require('../secrets')

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
//const dotenv = require('dotenv')

mongoose.connect(dbKey, () => console.log ("Database connected"))

// app.listen(8000, () => {
//     connectDB();
//     console.log('Both database and backend are running now.')
// });

app.use('/app', routesUrls)
app.listen(PORT, () => {
    console.log('backend are running now.')
});
