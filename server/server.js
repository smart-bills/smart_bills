const express = require('express');
const app = express()
const mongoose = require('mongoose')
//const dotenv = require('dotenv')
const routesUrls = require('./routes/userRoute')
const {dbKey} = require('../secrets')
const cors = require('cors')

const PORT = process.env.PORT || 8000

//dotenv.config()

mongoose.connect(dbKey, () => console.log ("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(PORT, () => {
    console.log('backend are running now.')
});