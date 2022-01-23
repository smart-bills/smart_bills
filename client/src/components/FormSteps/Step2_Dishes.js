import React from 'react';
import {Box, TextField, Button} from '@mui/material'

function Step2_dishes({dishes, changeDishInfo, removeDish, splitBy}) {
    
    const showEmailField = (splitBy === 'Split by Dishes' ? true : false);

    return (
    <React.Fragment>
        {dishes.map((item, index) => (
            <Box component='div' key={index}>
                                
                <Box component='div'>
                    <TextField
                        margin='dense'
                        label="Dish Name"
                        type='text'
                        variant="outlined"
                        value={item.dishName}
                        name='dishName'
                        onChange={e => changeDishInfo(e, index)}
                    />
                </Box>
                 
                <Box component='div'>
                    <TextField
                        margin='dense'
                        label="Price"
                        type='text'
                        variant="outlined"
                        value={item.amount}
                        name='amount'
                        onChange={e => changeDishInfo(e, index)}
                    />
                </Box>

                {showEmailField && 
                    <Box component='div'>
                        <TextField
                            margin='dense'
                            label="Email"
                            type='text'
                            variant="outlined"
                            value={item.userEmail}
                            name='userEmail'
                            onChange={e => changeDishInfo(e, index)}
                        />
                    </Box>
                }            
  
                <Button onClick={e => removeDish(e, index)}>Remove</Button>
		    </Box>
	    ))}
    </React.Fragment>
  )
}

export default Step2_dishes;