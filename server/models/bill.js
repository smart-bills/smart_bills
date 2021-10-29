const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const billSchema = new Schema({
    billID: { type: String, required: true },
    amount: { type: mongoose.Decimal128, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;