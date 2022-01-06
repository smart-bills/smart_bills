const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DishSchema = new Schema({
    dishName: { type: String, required: true },
    amount: { type: String, required: true },
    paid: { type: Boolean},
    userEmail: { type: String},
    description: { type: String},
    date: { type: String, required: true},
    billID: { type: String, required: true},
    storeName: { type: String, required: true}
}, { timestamps: true });

const Dish = mongoose.model('Dish', DishSchema);
module.exports = Dish;