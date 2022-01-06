const express = require('express');
const router = express.Router();
const Bill = require('../models/bill');
// const Dish = require('../models/dish');

router.post('/bill', async(req, res) => {
    try {

        await Bill.create({ 
            storeName: req.body.storeName,
            date: new Date(req.body.date),
            amount: req.body.amount
        });

        res.json({ message: 'It goes through', body: req.body});
    } catch (error) {
        res.json({ error, body: req.body});
    }
})

// router.post('/dish', async(req, res) => {
//     try {

//         await Dish.create({ 
//             dishName: req.body.dishName,
//             amount: req.body.amount,
//             userEmail: req.body.userEmail,
//             date: new Date(req.body.date),
//             billID: req.body.billID,
//             storeName: req.body.storeName,
//         });

//         res.json({ message: 'It goes through', body: req.body});
//     } catch (error) {
//         res.json({ error, body: req.body});
//     }
// })

module.exports = router;