const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    dishName: String,
    price: mongoose.Decimal128 
});

const billSchema = new Schema({
    dishes: [{
        dishName: String,
        price: mongoose.Decimal128
    }]
}, { timestamps: true });

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;