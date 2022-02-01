const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Set up all routes
app.use('/app/dashboard', require('./routes/dashboardRoute'));
app.use('/app/register', require('./routes/registerRoute'));
app.use('/app/auth', require('./routes/authRoute'));
app.use('/app/bill', require('./routes/billRoute'));

// Connecting Database
const dbKey = process.env.dbKey;
mongoose.connect(dbKey, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Connected Database Successfully');
});

if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static(path.join(__dirname, 'client', 'build')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
