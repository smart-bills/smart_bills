const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    dishName: String,
    price: mongoose.Decimal128 
})

const Dish = mongoose.model('Dish', dishSchema);
module.exports = Dish;