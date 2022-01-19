const express = require('express');
const router = express.Router();
const Bill = require('../models/bill');
const User = require('../models/user');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
// const Dish = require('../models/dish');

// @route   POST app/bill/
// @desc    Create a bill
// @access  Private
router.post(
	'/',
	[
		auth,
		check('storeName', 'Store name is required').not().isEmpty(),
		check('amount', 'Please include a valid amount').not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const user = await User.findById(req.user.id);

			const databaseRes = await Bill.create({
				hostID: user._id,
				storeName: req.body.storeName,
				amount: req.body.amount,
				dishes: req.body.dishes
			});

			res.json({ databaseRes });
		} catch (error) {
			res.json({ error });
		}
	}
);

// @route   POST app/bill/add_dishes
// @desc    Add dishes to the bill
// @access  Private
router.post(
	'/add_dishes',
	[
		auth,
		check('billID', 'Bill ID is required').not().isEmpty(),
		check('dishName', 'Dish name is required').not().isEmpty(),
		check('amount', 'Amount is required').not().isEmpty(),
		check('userEmail', 'User email is required').isEmail(),
	],
	async (req, res) => {

		const bill = await Bill.findById(req.body.billID);
		console.log(bill);
		
		// Create the new dish to append
		let newDish = {
		  dishName: req.body.dishName,
		  amount: req.body.amount,
		  userEmail: req.body.userEmail,
		}
	
		await Bill.updateOne({_id: bill._id}, { $push: {
			dishes: newDish
		}}); 

		res.json({ message: 'Append successfully'});
	}
);

// @route   POST app/bill/update_dish
// @desc    Update an existing dish
// @access  Private
router.post(
	'/update_dish', 
	[
		auth,
		check('billID', 'Bill ID is required').not().isEmpty(),
		check('dishID', 'Dish ID is required').not().isEmpty(),
		check('dishName', 'Dish name is required').not().isEmpty(),
	],
	async (req, res) => {
		const billID = req.body.billID;
		const dishID = req.body.dishID;
		const dishName = req.body.dishName;

		try {
			const targetDish = await Bill.findOne(
				{_id: billID},
				{dishes: {$elemMatch: {_id: dishID}}}
			);
			targetDish.dishes[0].dishName = dishName;
			await targetDish.save();
	
			res.json({message: 'Dish has been updated,'});	
		} catch (error) {
			res.status(401).json({error});
		}
	}
)

// @route   GET app/bill/:userid
// @desc    Get all bills for under a user with userid.
// @access  Private
router.get('/', auth, async (req, res) => {
	const userid = req.query.userid;
	
	try {
		const bills = await Bill.find({hostID: userid});
		res.json({bills});	
	} catch (error) {
		res.json({error});
	}
})

// @route   DELETE app/bill/:billid
// @desc    Delete a bill with the billid
// @access  Private
router.delete('/', auth, async (req, res) => {
	const billid = req.query.billid;

	try {
		const delRes = await Bill.deleteOne({_id: billid});
		res.json({delRes});
	} catch (error) {
		res.json({error});
	}
})

module.exports = router;