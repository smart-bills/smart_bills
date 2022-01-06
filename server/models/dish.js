const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DishSchema = new Schema({
    dishName: { type: String, required: true},
    amount: { type: String, required: true},
    paid: { type: Boolean, default: false},
    userEmail: { type: String, required: true},
    billID: { type: String, required: true},
    date: Date,
    storeName: String,
    description: String
}, { timestamps: true });

const Dish = mongoose.model('Dish', DishSchema);
module.exports = Dish;