const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillSchema = new Schema(
	{
		hostID: { type: Schema.ObjectId, ref: 'user' },
		storeName: { type: String, required: true },
		amount: { type: String, required: true },
		paid: { type: Boolean, default: false },
		date: Date,
		dishes: [
			{
				// Does user have to be required since we have the userEmail alraedy.
				// user: { type: Schema.ObjectId, required: true },
				user: Schema.ObjectId,
				dishName: { type: String, required: true },
				amount: { type: String, required: true },
				userEmail: { type: String, required: true },
				paid: { type: Boolean, default: false },
				date: Date,
				storeName: String,
				description: String,
			},
		],
		description: String,
	},
	{ timestamps: true }
);

const Bill = mongoose.model('Bill', BillSchema);
module.exports = Bill;

// dishes: [{type: Schema.ObjectId, ref: 'Dish'}],
