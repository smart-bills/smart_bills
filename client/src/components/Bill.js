import React from 'react'
import { Box, Button, Typography,
         Paper
} from '@mui/material';

function Bill({bill}) {

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

            </Paper>
        </Box>
    )
}

export default Bill
