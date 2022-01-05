const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const billSchema = new Schema({
    dishes: [{
        dishName: String,
        price: mongoose.Decimal128
    }]
}, { timestamps: true });

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;