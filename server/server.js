const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const {dbKey} = require('../secrets');
const PORT = process.env.PORT || 8000

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.get('/', (req, res, next) => {
    res.send('Hi');
});

app.use('/app', userRoute)
app.listen(PORT, () => {
    mongoose.connect(dbKey);
    console.log(`Backend is now connected ${Date()}`);
    console.log(`Database is now connected ${Date()}`);
});