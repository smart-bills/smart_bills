import React, {useEffect, useState} from 'react';
// import { useNavigate, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { Container, Button, Typography,
         Box, TextField, Dialog,
         DialogActions, DialogContent, DialogContentText,
         DialogTitle
} from '@mui/material';


function Dashboard() {
    const navigate = useNavigate();
    const [bills, setBills] = useState(null);
    const [hasBills, setHasBills] = useState(false);
    const [error, setError] = useState();
    const [open, setOpen] = useState(false);
    
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
            else                   setBills(bills);
        };
    }, []);

    async function addNewBill(e) {
        console.log('Hi');
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
                        Form
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={(e) => addNewBill()}>Add</Button>
                </DialogActions>
            </Dialog>

            <Typography variant='h6' component='h6'>
                Here is all your bills
            </Typography>

            <Container>
                {bills && bills.map(bill => {
                    return <Box key={bill._id}>
                        {bill.storeName}    
                    </Box>
                })}
            </Container>
 

        </Container>            
    )
}

export default Dashboard

            // {/* navigate is a function that can be used to redirect user. */}
            // {/* <button onClick={() => navigate('/login')}>
            //     Click to go back to the log in page.
            // </button> */}

            // {/* Navigate can be used to check if the user is authed. If not, use it to redirect user back. */}
            // {/* <Navigate to='/login' /> */}