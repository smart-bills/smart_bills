import React from 'react';
import {TextField, Button, Container} from '@mui/material'

function Step2_dishes({dishes, changeDishInfo, removeDish, splitBy}) {
    
    const showEmailField = (splitBy === 'Split by Dishes' ? true : false);

    return (
    <React.Fragment>
        {dishes.map((item, index) => (
            <Container component='div' key={index} sx={{display: 'flex', justifyContent: 'space-evenly', p:0}}>
                                
                <TextField
                    margin='normal'
                    label="Dish Name"
                    type='text'
                    variant="outlined"
                    value={item.dishName}
                    name='dishName'
                    onChange={e => changeDishInfo(e, index)}
                />
                 
                <TextField
                    margin='normal'
                    label="Price"
                    type='text'
                    variant="outlined"
                    value={item.amount}
                    name='amount'
                    onChange={e => changeDishInfo(e, index)}
                />

                {showEmailField && 
                    <TextField
                        margin='normal'
                        label="Email"
                        type='text'
                        variant="outlined"
                        value={item.userEmail}
                        name='userEmail'
                        onChange={e => changeDishInfo(e, index)}
                    />
                }            

                <Button onClick={e => removeDish(e, index)}>Remove</Button>
                
		    </Container>
	    ))}
    </React.Fragment>
  )
}

export default Step2_dishes;