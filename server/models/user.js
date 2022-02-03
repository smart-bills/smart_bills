const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		userName: { type: String, required: true },
		email: { type: String, required: true, unique: true, lowercase: true, trim: true},
		password: { type: String, required: true },
	},
	{ timestamps: true }
);

const User = mongoose.model('user', UserSchema);
module.exports = User;