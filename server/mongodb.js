const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://smartbill:smartbill@smartbills.how1j.mongodb.net/SmartBills?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;