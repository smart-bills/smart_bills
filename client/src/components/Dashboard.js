import React, { useEffect, useState } from 'react';
// import { useNavigate, Navigate } from 'react-router-dom';
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

function Dashboard( {loadUser} ) {
    const navigate = useNavigate();
    const [bills, setBills] = useState(null);
    const [hasBills, setHasBills] = useState(false);
    const [error, setError] = useState();
    const [open, setOpen] = useState(false);
    const [newStoreName, setNewStoreName] = useState('');
    const [newAmount, setNewAmount] = useState('');
    
    // Use useEffect hook to fetch the user's data once they log in.
    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if(token) {
            loadUser(token);
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
    // [loadUser, navigate]
    
    async function addNewBill(e) {
        e.preventDefault();

        const url = 'http://localhost:8000/app/bill';
        const body = {
            "storeName": newStoreName,
            "amount": newAmount
        };
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token};

        await axios.post(url, body, {headers});
        setOpen(false);
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
                            id="storeName"
                            label="Store Name"
                            type="text"
                            variant="outlined"
                            value={newStoreName}
                            onChange={(e) => setNewStoreName(e.target.value)}
                            required
                        />

                        <TextField  
                            margin="dense"
                            id="amount"
                            label="Amount"
                            type="text"
                            variant="outlined"
                            value={newAmount}
                            onChange={(e) => setNewAmount(e.target.value)}
                            required
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button type='submit' form='newBillForm'>Add</Button>
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