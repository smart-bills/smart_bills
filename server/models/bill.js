const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    storeName: { type: String, required: true},
    date: { type: Date, required: true},
    amount: { type: String, required: true},
    paid: { type: Boolean, default: false},
    userEmail: String,
    dishes: [{type: Schema.ObjectId, ref: 'Dish'}],
    invitees: [String],
    description: String
}, { timestamps: true });

const Bill = mongoose.model('Bill', BillSchema);
module.exports = Bill;