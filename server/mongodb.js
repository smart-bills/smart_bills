const mongoose = require('mongoose')
const uri = "mongodb+srv://superman:smartbill@smartbillsdatabase.v48nf.mongodb.net/SmartBillsDatabase?retryWrites=true&w=majority";

async function connectDB(){
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })   
        console.log('DB is now connected');
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;