const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const billRoute = require('./routes/billRoute');
const parseImage = require('./visionAPI');
require('dotenv').config({ path: '../.env' });
const dbKey = process.env.dbKey;
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req, res, next) => {
    res.send('Hi');
});

app.post('/parseImage', async (req, res, next) => {
	console.log('parseImage was run');
	let imageInBase64 = req.body.file;
	imageInBase64 = imageInBase64.split(',');
	imageInBase64 = imageInBase64[1];

	await parseImage(imageInBase64);
	res.json({ message: 'Upload was successful' });
});


app.use('/app/users', require('./routes/userRoute'));
app.use('/app/auth', require('./routes/authRoute'));
app.use('/app', billRoute);

app.listen(PORT, () => {
	mongoose.connect(dbKey);
	console.log(`Backend is now connected ${Date()}`);
	console.log(`Database is now connected ${Date()}`);
});