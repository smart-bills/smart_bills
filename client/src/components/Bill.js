import React, {useState} from 'react'
import { Box, Button, Typography,
         Paper, Collapse
} from '@mui/material';

function Bill({bill}) {
    const [expanded, setIsExpanded] = useState(false);
    const [viewOrCollapse, setViewOrCollapse] = useState('View More...')
    
    function showMoreDetails() {
        setIsExpanded(!expanded);

        if(viewOrCollapse === 'View More...') setViewOrCollapse('Collapse');
        else setViewOrCollapse('View More...');
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
                            <Typography key={index}>
                                Dish name:{dish.dishName}
                            </Typography>
                        )
                    })}

                </Collapse>
            </Paper>
        </Box>
    )
}

export default Bill