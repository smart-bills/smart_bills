import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { Container, Button, Typography, TextField, Dialog,
         DialogActions, DialogContent, DialogContentText,
         DialogTitle } 
from '@mui/material';

import { connect } from 'react-redux';
import { loadUser } from '../actions/auth';
import Bill from './Bill';

function Dashboard() {
    const navigate = useNavigate();
    
    /* State variables for database */
    const [bills, setBills] = useState(null);
    const [hasBills, setHasBills] = useState(false);
    const [error, setError] = useState();

    /* State variables for form */
    // const [step, setStep] = useState(1);
    const [open, setOpen] = useState(false);
    const [storeName, setStoreName] = useState('');
    const [billAmount, setBillAmount] = useState('');
    const [form, setNewForm] = useState([]);

    // Use useEffect hook to fetch the user's data once they log in.
    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if(token) {
            const {user} = jwt_decode(token);

            if(!user) {
                localStorage.removeItem('token');
                navigate('/login');
            }
            
            getBills(token, user.id);
        } else  {
            navigate('/login');
        }

        // Query the backend and database to get all the bills.
        async function getBills(token, userid) {
            const url = `http://localhost:8000/app/bill/?userid=${userid}`;
            const headers = { 'x-auth-token': token };
            const res = await axios.get(url, { headers });
            const {bills, error} = res.data;
            
            if(error)   setError(error);
            
            if(bills.length === 0) setHasBills(false);
            else {
                setBills(bills);
                setHasBills(true);
            }
        };
    });
    
    async function addNewBill(e) {
        e.preventDefault();

        const url = 'http://localhost:8000/app/bill';
        const body = {
            "storeName": storeName,
            "amount": billAmount,
            "dishes": form
        };
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token};

        await axios.post(url, body, {headers});
        setOpen(false);
    }

    function handleAddDish(e) {
        e.preventDefault();

        const inputState = {
            userEmail: '',
            dishName: '',
            amount: ''
        };

        setNewForm(prevState => [...prevState, inputState]);
    }

    function onChange(e, index) {
        e.preventDefault();
        e.persist();

        setNewForm(prevState => {
            return prevState.map((item, i) => {
                if(i !== index) return item;
                
                return {
                    ...item,
                    [e.target.name]: e.target.value
                }
            })
        })
    }

    function handleRemoveField(e, index) {
        e.preventDefault();
        setNewForm(prevState => {
            prevState.filter(item => item !== prevState[index]);
        })
    }

    return (
        <Container >
            <Typography variant='h4'>
                Welcome back!
            </Typography>

            <Button variant='contained' onClick={() => setOpen(true)}>
                Add a new bill
            </Button>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add a new bill</DialogTitle>
                <DialogContent>

                    <DialogContentText>
                        Please enter the details of your new bill.
                    </DialogContentText>

                    <form id='newBillForm' onSubmit={(e) => addNewBill(e)}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Store Name"
                            type="text"
                            variant="outlined"
                            value={storeName}
                            onChange={e => setStoreName(e.target.value)}
                            required />
                            
                        <TextField
                            margin="dense"
                            label="Bill Amount"
                            type="text"
                            variant="outlined"
                            value={billAmount}
                            onChange={e => setBillAmount(e.target.value)}
                            required />

                        {form.map((item, index) => (
							<div key={`item-${index}`}>
								<div>
									<input
										type='text'
										name='dishName'
										placeholder='Dish'
										value={item.dishName}
										onChange={e => onChange(e, index)}
									></input>
								</div>
								<div>
									<input
										type='text'
										name='amount'
										placeholder='Price'
										value={item.amount}
										onChange={e => onChange(e, index)}
									></input>
								</div>
								<div>
									<input
										type='text'
										name='userEmail'
										placeholder='Email'
										value={item.userEmail}
										onChange={e => onChange(e, index)}
									></input>
								</div>
								<button onClick={e => handleRemoveField(e, index)}>X</button>
							</div>
						))}
					
						<button onClick={handleAddDish}> Add a dish</button>
                    
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button type='submit' form='newBillForm'>Add</Button>
                    {/* <Button onClick={() => setStep(step+1)}>Next</Button> */}
                </DialogActions>

            </Dialog>

            {error && <Typography variant='h6' component='h6'> {error} </Typography>}

            {hasBills ? 
                <Typography variant='h6' component='h6'>
                    Here is all your bills:
                </Typography>
                :
                <Typography variant='h6' component='h6'>
                    You currently do not have any bills.
                </Typography>
            }

            <Container>
                {bills && bills.map(bill => {return <Bill bill={bill} key={bill._id}/>})}
            </Container>
 
        </Container>            
    )
}

export default connect(null, { loadUser })(Dashboard);