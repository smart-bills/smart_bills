const express = require('express');
const router = express.Router();
const Bill = require('../models/bill');

router.post('/bill', async(req, res) => {
    try {
        
        await Bill.create({ 
            storeName: req.body.storeName,
            date: req.body.date,
            dishes: req.body.dishes,
            amount: req.body.amount
        });

        res.json({ message: 'It goes through', body: req.body});
    } catch (error) {
        res.json({ error, body: req.body});
    }
})

module.exports = router;