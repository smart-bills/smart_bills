const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
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

// Server static assests in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	// app.get('*', (req, res) => {
	// 	res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
	// });
	app.get('*', function (req, res) {
		const index = path.join(__dirname, 'build', 'index.html');
		res.sendFile(index);
	});
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
