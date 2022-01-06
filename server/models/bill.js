const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    storeName: { type: String, required: true},
    date: { type: Date, required: true},
    amount: { type: String, required: true},
    paid: { type: Boolean, default: false},
    userEmail: { type: String},
    dishes: { type: Array},
    invitees: { type: Array},
    description: { type: String}
}, { timestamps: true });

const Bill = mongoose.model('Bill', BillSchema);
module.exports = Bill;