const express = require('express');
const app = express()
const mongoose = require('mongoose')
const {dbKey} = require('../secret')
const routesUrls = require('./routes/userRoute')
const cors = require('cors')

mongoose.connect(dbKey , () => console.log ("Database connected"))   

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(8000, () => {
    console.log('backend are running now.')
});

