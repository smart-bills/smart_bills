import React from 'react';
import {Box, TextField, Button} from '@mui/material'

function Step2_dishes({dishes, onChange, handleRemoveField}) {
  
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
                            onChange={e => onChange(e, index)}
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
                                onChange={e => onChange(e, index)}
                        />
                    </Box>
                                
                    <Box component='div'>
                        <TextField
                                margin='dense'
                                label="Email"
                                type='text'
                                variant="outlined"
                                value={item.userEmail}
                                name='userEmail'
                                onChange={e => onChange(e, index)}
                        />
                    </Box>
                             
                    <Button onClick={e => handleRemoveField(e, index)}>Remove</Button>
		        </Box>
	        ))}

    </React.Fragment>
  )
}

export default Step2_dishes;
