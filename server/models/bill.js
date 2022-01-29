const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillSchema = new Schema(
	{
		hostID: { type: Schema.ObjectId, ref: 'user' },
		storeName: { type: String, required: true },
		amount: { type: Number, required: true },
		tax: { type: Number, required: true },
		tips: { type: Number, required: true },
		paid: { type: Boolean, default: false },
		invitees: [String],
		description: String,
		date: Date,
		dishes: [
			{
				userEmail: String,
				dishName: { type: String, required: true },
				amount: { type: Number, required: true },
			},
		],
	},
	{ timestamps: true }
);

const Bill = mongoose.model('Bill', BillSchema);
module.exports = Bill;
