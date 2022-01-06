const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    storeName: { type: String, required: true},
    date: { type: String, required: true},
    dishes: { type: Array, required: true},
    amount: { type: String, required: true},
    invitees: { type: Array },
    description: { type: String }
}, { timestamps: true });

const Bill = mongoose.model('Bill', BillSchema);
module.exports = Bill;

