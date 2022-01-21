/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {
	Box,
	Container,
	Button,
	Typography,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Tab,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import { connect } from 'react-redux';
import { loadUser } from '../actions/auth';
import Bill from './Bill';
import Step1_Bill from './FormSteps/Step1_Bill';
import Step2_Dishes from './FormSteps/Step2_Dishes';
import Step3_Confirm from './FormSteps/Step3_Confirm';
import Step4_Success from './FormSteps/Step4_Success';

function Dashboard() {
	const navigate = useNavigate();

	/* State variables for database */
	const [bills, setBills] = useState([]);
	const [refresh, setRefresh] = useState(true);
	const [hasBills, setHasBills] = useState(false);
	const [error, setError] = useState();

	/* State variables for form */
	const [step, setStep] = useState(1);
	const [open, setOpen] = useState(false);
	const [storeName, setStoreName] = useState('');
	const [billAmount, setBillAmount] = useState('');
	const [dishes, setDishes] = useState([]);

	/* State variable for tabs */
	const [tabValue, setTabValue] = useState('1');

	function handleTabChange(e, newValue) {
		setTabValue(newValue);
	}

	// Use useEffect hook to fetch the user's data once they log in.
	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			const { user } = jwt_decode(token);

			if (!user) {
				localStorage.removeItem('token');
				navigate('/login');
			}

			if (refresh) getBills(token, user.id);
		} else {
			navigate('/login');
		}
	});

	// Query the backend and database to get all the bills.
	async function getBills(token, userid) {
		const url = `http://localhost:8000/app/bill/?userid=${userid}`;
		const headers = { 'x-auth-token': token };
		const res = await axios.get(url, { headers });
		const { bills, error } = res.data;

		if (error) setError(error);

		if (bills.length === 0) setHasBills(false);
		else {
			setBills(bills);
			setHasBills(true);
			setRefresh(false);
		}
	}

	async function addNewBill(e) {
		e.preventDefault();

		const url = 'http://localhost:8000/app/bill';
		const body = {
			storeName: storeName,
			amount: billAmount,
			dishes: dishes,
		};
		const token = localStorage.getItem('token');
		const headers = { 'x-auth-token': token };

		await axios.post(url, body, { headers });
		setOpen(false);
		resetForm();
	}

	function resetForm() {
		setStep(1);
		setStoreName('');
		setBillAmount('');
		setDishes([]);
		setRefresh(true);
	}

	function handleAddDish(e) {
		e.preventDefault();

		const inputState = {
			userEmail: '',
			dishName: '',
			amount: '',
		};

		setDishes(prevState => [...prevState, inputState]);
	}

	function onChange(e, index) {
		e.preventDefault();
		e.persist();

		setDishes(prevState => {
			return prevState.map((item, i) => {
				if (i !== index) return item;

				return {
					...item,
					[e.target.name]: e.target.value,
				};
			});
		});
	}

	function handleRemoveField(e, index) {
		e.preventDefault();
		setDishes(prevState => prevState.filter(item => item !== prevState[index]));
	}

	function renderFormContent() {
		switch (step) {
			case 1:
				return (
					<>
						<DialogContent>
							<DialogContentText>
								{' '}
								Please enter the details of your new bill.{' '}
							</DialogContentText>
							<Step1_Bill
								storeName={storeName}
								setStoreName={setStoreName}
								billAmount={billAmount}
								setBillAmount={setBillAmount}
							/>
						</DialogContent>

						<DialogActions>
							<Button onClick={() => setOpen(false)}>Cancel</Button>
							<Button onClick={e => gotoNext(e)}>Next</Button>
						</DialogActions>
					</>
				);

			case 2:
				return (
					<>
						<DialogContent>
							<DialogContentText>
								{' '}
								Please enter the details of your new bill.{' '}
							</DialogContentText>
							<Step2_Dishes
								dishes={dishes}
								onChange={onChange}
								handleRemoveField={handleRemoveField}
							/>
							<Button onClick={handleAddDish}>Add a dish</Button>
						</DialogContent>

						<DialogActions>
							<Button onClick={() => setOpen(false)}>Cancel</Button>
							<Button onClick={e => gotoPrevious(e)}>Previous</Button>
							<Button onClick={e => gotoNext(e)}>Next</Button>
						</DialogActions>
					</>
				);

			default:
				return (
					<>
						<DialogContent>
							<DialogContentText>
								{' '}
								Please enter the details of your new bill.{' '}
							</DialogContentText>
							<Step2_Dishes
								dishes={dishes}
								onChange={onChange}
								handleRemoveField={handleRemoveField}
							/>
						</DialogContent>

						<DialogActions>
							<Button onClick={() => setOpen(false)}>Cancel</Button>
							<Button onClick={e => gotoPrevious(e)}>Previous</Button>
							<Button type='submit' form='newBillForm'>
								Add
							</Button>
						</DialogActions>
					</>
				);
		}
	}

	function gotoNext(e) {
		e.preventDefault();
		setStep(step + 1);
	}

	function gotoPrevious(e) {
		e.preventDefault();
		setStep(step - 1);
	}

	return (
		<Container>
			<Typography variant='h4'>Welcome back!</Typography>

			<Button variant='contained' onClick={() => setOpen(true)}>
				Add a new bill
			</Button>

			<form id='newBillForm' onSubmit={e => addNewBill(e)}>
				<Dialog open={open} onClose={() => setOpen(false)}>
					<DialogTitle>Add a new bill</DialogTitle>

					{renderFormContent()}
				</Dialog>
			</form>

			{error && (
				<Typography variant='h6' component='h6'>
					{' '}
					{error}{' '}
				</Typography>
			)}

			{hasBills ? (
				<Container>
					<Typography variant='h6' component='h6'>
						Here is all your bills:
					</Typography>

					<Box sx={{ width: '100%', typography: 'body1' }}>
						<TabContext value={tabValue}>
							<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
								<TabList onChange={handleTabChange}>
									<Tab label='Unpaid Bills' value='1' />
									<Tab label='Paid Bills' value='2' />
								</TabList>
							</Box>

							<TabPanel value='1'>
								{bills.map(bill => {
									if (!bill.paid)
										return (
											<Bill
												billInfo={bill}
												key={bill._id}
												setRefresh={setRefresh}
											/>
										);
									return null;
								})}
							</TabPanel>

							<TabPanel value='2'>
								{bills.map(bill => {
									if (bill.paid)
										return (
											<Bill
												billInfo={bill}
												key={bill._id}
												setRefresh={setRefresh}
											/>
										);
									return null;
								})}
							</TabPanel>
						</TabContext>
					</Box>
				</Container>
			) : (
				<Container>
					<Typography variant='h6' component='h6'>
						You currently do not have any bills.
					</Typography>
				</Container>
			)}
		</Container>
	);
}

export default connect(null, { loadUser })(Dashboard);
