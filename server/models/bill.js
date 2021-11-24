const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const billSchema = new Schema({
    
}, { timestamps: true });

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;