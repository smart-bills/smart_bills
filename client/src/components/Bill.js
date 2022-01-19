import React, {useState} from 'react'
import { Box, Button, Typography,
         Paper, Collapse
} from '@mui/material';
import axios from 'axios';

function Bill({bill}) {
    const [expanded, setIsExpanded] = useState(false);
    const [viewOrCollapse, setViewOrCollapse] = useState('View More...')
    
    function showMoreDetails() {
        setIsExpanded(!expanded);
        console.log(bill);
        if(viewOrCollapse === 'View More...') setViewOrCollapse('Collapse');
        else setViewOrCollapse('View More...');
    }

    async function deleteBill() {
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token};

        const billid = bill._id;
        const url = `http://localhost:8000/app/bill/?billid=${billid}`;

        await axios.delete(url, {headers});
        setIsExpanded(!expanded);
    }

    return (
        <Box component='div' sx={{margin: '1.5em'}}>
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

                <Button onClick={showMoreDetails}>{viewOrCollapse}</Button>
                <Collapse component='div' in={expanded}>

                    {bill.dishes.map((dish, index) => {
                        return (
                            <Box key={index}>
                                <Typography>
                                    Dish name:{dish.dishName}
                                </Typography>
                                <Typography>
                                    Dish amount: will be here.
                                </Typography>
                            </Box>
                        )
                    })}
                    
                    <Button onClick={deleteBill}>Delete this bill</Button>

                </Collapse>
            </Paper>
        </Box>
    )
}

export default Bill