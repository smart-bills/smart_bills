const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/userRoute')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log ("Database connected"))   

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(8000, () => {
    console.log('backend are running now.')
});

