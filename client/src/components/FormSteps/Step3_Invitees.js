import React from 'react';
import {Box, TextField, Button} from '@mui/material'

function Step3_Invitees({invitees, changeInviteeInfo, removeInvitee}) {
    
    return (
    <React.Fragment>

        {invitees.map((invitee, index) => (
            <Box component='div' key={index}>

                <Box component='div'>
                    <TextField
                        margin='dense'
                        label="Invitee email"
                        type='text'
                        variant="outlined"
                        value={invitee}
                        name='inviteeEmail'
                        onChange={e => changeInviteeInfo(e, index)}
                    />
                </Box>

                <Button onClick={e => removeInvitee(e, index)}>Remove</Button>

            </Box>
        ))}
        
    </React.Fragment>
  )
}

export default Step3_Invitees;
