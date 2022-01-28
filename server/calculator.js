function calc_bill(subtotal, tax, tip, headcount) {
	let split = (subtotal + tip + tax) / headcount;
	split = Math.round(split * 100) / 100;
	return split;
}
function calc_dish(subtotal, dish_amount, tip, tax, headcount) {
	let percent_tax = tax / subtotal;
	let split_tip = tip / headcount;
	split_tip = Math.round(split_tip * 100) / 100;
	let split = dish_amount + dish_amount * percent_tax + split_tip;
	split = Math.round(split * 100) / 100;

	return split;
}
module.exports = { calc_bill, calc_dish };
