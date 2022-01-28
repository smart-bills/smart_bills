import React, { useState } from 'react';
import { Container, Button, Typography, Paper, Collapse, Grid } from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
		// The default for column is 12, but it can be increased.
		<Grid container sx={{ margin: '1.5em'}} spacing={2} column={12}>
			<Grid item xs={3} />

			<Grid item xs={6}>
				<Paper elevation={5} sx={{maxWidth: 450}}>
					<Typography variant='h5' component='h3' sx={{pl: 2, pt: 2, textDecoration: 'underline'}}>
						{bill.storeName.toUpperCase()}
					</Typography>

					<Grid container sx={{pb: 1}}>
						<Grid item xs={4}>
							<Typography variant='subtitle1' component='h4' sx={{pl: 3, pt: 1}}>
								Total: {`$${bill.amount}`}
							</Typography>
						</Grid>

						<Grid item xs={4}>
							<Typography variant='subtitle1' component='h4' sx={{pl: 3, pt: 1  }}>
								Paid: {bill.paid.toString()}
							</Typography>
						</Grid>
					</Grid>

					{
						bill.description &&
						<Typography variant='subtitle1' component='h4' sx={{pl: 3, pt: 1}}>
							Description: {bill.description}
						</Typography>
					}
					
					{
						viewOrCollapse === "View More..." ?
							<Button onClick={showMoreDetails} sx={{pl: 3}} startIcon={<ExpandMoreIcon />}> {viewOrCollapse} </Button>
							:
							<Button onClick={showMoreDetails} sx={{pl: 3}} startIcon={<ExpandLessIcon />}> {viewOrCollapse} </Button>
					}

					<Collapse component='div' in={expanded}>
						{bill.dishes.map((dish, index) => {
							return (
								<Container key={index} sx={{display: 'flex', pb:2}}>
									<Typography sx={{pr: 2}}>Item:{dish.dishName}</Typography>
									<Typography sx={{pl: 2}}>${dish.amount}</Typography>
								</Container>
							);
						})}
						
						<Grid container column={12} spacing={1}>
							<Grid item xs={5}>
								<Button onClick={deleteBill} startIcon={<DeleteIcon />}>Delete this bill</Button>	
							</Grid>

							<Grid item xs={3}>
								{bill.paid ? (
									<Button onClick={markUnpaid}>Unpay</Button>
								) : (
									<Button onClick={markPaid}>Paid</Button>
								)}
							</Grid>
							<Grid item xs={4} />
						</Grid>
					</Collapse>
				</Paper>
			</Grid>

			<Grid item xs={3} />
		</Grid>
	);
}

export default Bill;