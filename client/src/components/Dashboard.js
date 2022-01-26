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
import Step3_Invitees from './FormSteps/Step3_Invitees';
// import Step4_Success from './FormSteps/Step4_Success';

function Dashboard() {
    const navigate = useNavigate();
    
    /* 
       Very important!!! 
       refresh state will keep track of
       when the webpage needs to be refreshed.
       It will be shared between dashboard and bill components.
    */
    const [refresh, setRefresh] = useState(true);

    /* State variables for database */
    const [bills, setBills] = useState([]);
    const [hasBills, setHasBills] = useState(false);
    const [error, setError] = useState();

	/* State variables for form */
	const [step, setStep] = useState(1);
	const [open, setOpen] = useState(false);
	const [storeName, setStoreName] = useState('');
	const [billAmount, setBillAmount] = useState('');
	const [invitees, setInvitees] = useState([]);
	const [dishes, setDishes] = useState([]);

	/* State variable for tabs */
	const [tabValue, setTabValue] = useState('1');
	const handleTabChange = (e, newValue) => setTabValue(newValue);

	/* State variable for split by dish or people */
	const [splitBy, setSplitBy] = useState('Split by People');
	const handleSplitChange = (e, newValue) => {
		resetForm();
		setSplitBy(newValue);
	}

	/* Use useEffect hook to fetch the user's data once they log in */
	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			const { user } = jwt_decode(token);

			if (!user) {
				localStorage.removeItem('token');
				navigate('/login');
			}

			if (refresh) getBills(token, user.id);
		} 
		else navigate('/login');
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
		// let body = {};

		// if(splitBy === 'Split by People') {
		// 	body.storeName = storeName;
		// 	body.amount = billAmount;
		// 	body.dishes = dishes;
		// 	body.invitees = invitees;
		// } else {
		// 	body.storeName = storeName;
		// 	body.amount = billAmount;
		// 	body.dishes = dishes;
		// }

		const body = {
			storeName: storeName,
			amount: billAmount,
			dishes: dishes,
		};

		if(splitBy === 'Split by People') {
			body.invitees = invitees;
		}

		const token = localStorage.getItem('token');
		const headers = { 'x-auth-token': token };

		const {data} = await axios.post(url, body, { headers });
		if(data.databaseRes) {
			sendBill(e);
		} else {
			console.log(data.error);
		}

		setOpen(false);
		setRefresh(true);
	}

	const sendBill = (e) => {
		e.preventDefault();
		invitees.forEach(invitee => console.log(invitee));
	}

	const resetForm = () => {
		setStep(1);
		setStoreName('');
		setBillAmount('');
		setDishes([]);
		setInvitees([]);
	}

	const handleAddInvitees = (e) => {
		e.preventDefault();
		setInvitees(prevState => [...prevState, '']);
	}

	const changeInviteeInfo = (e, index) => {
		e.preventDefault();
		e.persist();

		setInvitees(prevState => {
			return prevState.map((invitee, i) => {
				if(i !== index) return invitee;
				return e.target.value;
			})
		})
	}

	const removeInvitee = (e, index) => {
		e.preventDefault();
		setInvitees(prevState => prevState.filter((invitee, i) => i !== index));
	}

	/* 
		The reason of having handleAddDish is to create an empty dish and append it to the array.
		So when you map it out, you'll have an empty input fields for the new dish at the end.
	*/
	const handleAddDish = (e) => {
		e.preventDefault();

		const inputState = {
			userEmail: '',
			dishName: '',
			amount: '',
		};

		setDishes(prevState => [...prevState, inputState]);
	}

	const changeDishInfo = (e, index) => {
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

	const removeDish = (e, index) => {
		e.preventDefault();
		setDishes(prevState => prevState.filter(item => item !== prevState[index]));
	}

	const gotoNext = (e) => {
		e.preventDefault();
		setStep(step + 1);
	}

	const gotoPrevious = (e) => {
		e.preventDefault();
		setStep(step - 1);
	}

	const renderFormContent = () => {
		switch (step) {
			case 1:
				return (
					<>
						<DialogContent>
							<DialogContentText sx={{mb: 2}}>
								{' '}Please enter the details of your new bill.{' '}
							</DialogContentText>
							<Step1_Bill
								storeName={storeName}
								setStoreName={setStoreName}
								billAmount={billAmount}
								setBillAmount={setBillAmount}
								splitBy={splitBy}
								handleSplitChange={handleSplitChange}
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
								{' '}Please enter the details of the dishes in this bill.{' '}
							</DialogContentText>
							<Step2_Dishes
								dishes={dishes}
								changeDishInfo={changeDishInfo}
								removeDish={removeDish}
								splitBy={splitBy}
							/>

							<Container>
								<Button onClick={handleAddDish}>Add a dish</Button>
							</Container>
						</DialogContent>

						<DialogActions>
							<Button onClick={() => setOpen(false)}>Cancel</Button>
							<Button onClick={e => gotoPrevious(e)}>Previous</Button>
							<Button onClick={e => gotoNext(e)}>Next</Button>
						</DialogActions>
					</>
				);

			case 3:
				if(splitBy === 'Split by People') {
					return(
						<>
							<DialogContent>
								<DialogContentText>
									{' '}Please enter the email address for each invitee.{' '}
								</DialogContentText>
								<Step3_Invitees
									invitees={invitees}
									changeInviteeInfo={changeInviteeInfo}
									removeInvitee={removeInvitee}
								/>

							<Container>
								<Button onClick={handleAddInvitees}>Add an invitee</Button>
							</Container>
							</DialogContent>
		
							<DialogActions>
								<Button onClick={() => setOpen(false)}>Cancel</Button>
								<Button onClick={e => gotoPrevious(e)}>Previous</Button>
								<Button onClick={e => gotoNext(e)}>Next</Button>
							</DialogActions>
						</>
					);
				}
				else {
					return(
						<>
							<DialogContent>
								<DialogContentText>
									{' '}Please confirm the details of the dishes in this bill.{' '}
								</DialogContentText>
								<Step2_Dishes
									dishes={dishes}
									changeDishInfo={changeDishInfo}
									removeDish={removeDish}
									splitBy={splitBy}
								/>
							</DialogContent>
		
							<DialogActions>
								<Button onClick={() => setOpen(false)}> Cancel </Button>
								<Button onClick={e => gotoPrevious(e)}>Previous</Button>
								<Button type='submit' form='newBillForm'>Send and Add Bill</Button>
							</DialogActions>
						</>
					);
				}

			default:
				return(
					<>
						<DialogContent>
							<DialogContentText>
								{' '}Please confirm the details of the dishes in this bill.{' '}
							</DialogContentText>
							<Step3_Invitees
								invitees={invitees}
								changeInviteeInfo={changeInviteeInfo}
								removeInvitee={removeInvitee}
							/>
						</DialogContent>
	
						<DialogActions>
							<Button onClick={() => setOpen(false)}>Cancel</Button>
							<Button onClick={e => gotoPrevious(e)}>Previous</Button>
							<Button type='submit' form='newBillForm'>Send and Add Bill</Button>
						</DialogActions>
					</>
				);	
		}
	}

	return (
		<Container component='div' sx={{ mt: 10 }}>

			<Container component='div' sx={{ display: 'flex' ,justifyContent: "space-between"}}>
				<Typography variant='h4'>Welcome back!</Typography>

				<Button variant='contained' onClick={() => {
					resetForm();
					setOpen(true)
				}}>
					Add a new bill
				</Button>
			</Container>


			<form id='newBillForm' onSubmit={e => addNewBill(e)}>
				<Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth='sm'>
					<DialogTitle>Add a new bill</DialogTitle>
					
					{renderFormContent()}

				</Dialog>
			</form>

			{error && (
				<Typography variant='h6' component='h6'>
					{error}
				</Typography>
			)}

			{hasBills ? (
				<Container sx={{ mt: 3}}>
					<Typography variant='h6' component='h6'>
						Here is all your bills:
					</Typography>

					<Box sx={{ width: '100%', typography: 'body1' }}>
						<TabContext value={tabValue} >
							<Box sx={{borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-around'}}>
								<TabList onChange={handleTabChange} className='tabs'>
									<Tab label='Unpaid Bills' value='1' sx={{mr: 20}}/>
									<Tab label='Paid Bills' value='2' sx={{ml: 20}}/>
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