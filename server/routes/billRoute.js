const express = require('express');
const router = express.Router();
const Bill = require('../models/bill');
const User = require('../models/user');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
// const Dish = require('../models/dish');

router.post('/bill', 
    [   
        auth,
        check('storeName', 'Store name is required').not().isEmpty(),
        check('amount', 'Please include a valid amount').not().isEmpty(),
        // check('dishes', '').not().isEmpty()
    ],

    async(req, res) => {
        const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

        try {
            const user = await User.findById(req.user.id);

            await Bill.create({ 
                hostID: user._id,
                storeName: req.body.storeName,
                amount: req.body.amount,
                // date: new Date(req.body.date),
            });

            res.json({ message: 'It goes through', body: req.body});
        } catch (error) {
            res.json({ error, body: req.body});
        }
})

router.post('/add_dishes', async(req, res) => {
    
})

router.get('/bills', (req, res) => {
    // res.json( {message: 'HI'});
})

module.exports = router;