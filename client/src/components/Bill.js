import React, { useState } from 'react';
import { Container, Button, Typography, Paper, Collapse } from '@mui/material';
import axios from 'axios';

function Bill({ billInfo: bill, setRefresh }) {
	const [expanded, setIsExpanded] = useState(false);
	const [viewOrCollapse, setViewOrCollapse] = useState('View More...');

	function showMoreDetails() {
		setIsExpanded(!expanded);
		if (viewOrCollapse === 'View More...') setViewOrCollapse('Collapse');
		else setViewOrCollapse('View More...');
	}

	async function deleteBill() {
		const token = localStorage.getItem('token');
		const headers = { 'x-auth-token': token };

		const billid = bill._id;
		const url = `http://localhost:8000/app/bill/?billid=${billid}`;

		await axios.delete(url, { headers });
		setIsExpanded(!expanded);
		setRefresh(true);
	}

	async function markPaid() {
		const token = localStorage.getItem('token');
		const headers = { 'x-auth-token': token };
		const body = { billid: bill._id };
		const url = `http://localhost:8000/app/dashboard/paid/`;
		await axios.put(url, body, { headers });
		setRefresh(true);
	}

	async function markUnpaid() {
		const token = localStorage.getItem('token');
		const headers = { 'x-auth-token': token };
		const body = { billid: bill._id };
		const url = `http://localhost:8000/app/dashboard/unpaid/`;
		await axios.put(url, body, { headers });
		setRefresh(true);
	}
	return (
		<Container component='div' sx={{ margin: '1.5em' }}>
			<Paper elevation={4}>
				<Typography variant='h6' component='h2'>
					{bill.storeName}
				</Typography>
				<Typography variant='subtitle1' component='h4'>
					Amount: {bill.amount}
				</Typography>
				<Typography variant='subtitle1' component='h4'>
					Key: {bill._id}
				</Typography>
				<Typography variant='subtitle1' component='h4'>
					Paid: {bill.paid.toString()}
				</Typography>
				<Button onClick={showMoreDetails}>{viewOrCollapse}</Button>
				<Collapse component='div' in={expanded}>
					{bill.dishes.map((dish, index) => {
						return (
							<Container key={index}>
								<Typography>Dish name:{dish.dishName}</Typography>
								<Typography>Dish amount: {dish.amount}</Typography>
							</Container>
						);
					})}

					<Button onClick={deleteBill}>Delete this bill</Button>
					{bill.paid ? (
						<Button onClick={markUnpaid}>Unpay</Button>
					) : (
						<Button onClick={markPaid}>Paid</Button>
					)}
				</Collapse>
			</Paper>
		</Container>
	);
}

export default Bill;