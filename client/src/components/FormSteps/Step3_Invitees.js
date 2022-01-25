import React from 'react';
import {Container, Box, TextField, Button} from '@mui/material'

function Step3_Invitees({invitees, changeInviteeInfo, removeInvitee}) {
    
    return (
    <React.Fragment>

        {invitees.map((invitee, index) => (
            <Container component='div' key={index} sx={{display: 'flex', justifyContent: 'flex-start', p:0}}>
                <TextField
                    margin='dense'
                    label="Invitee email"
                    type='text'
                    variant="outlined"
                    value={invitee}
                    name='inviteeEmail'
                    onChange={e => changeInviteeInfo(e, index)}
                />

                <Button onClick={e => removeInvitee(e, index)} sx={{ml: 3}}>Remove</Button>
            </Container>
        ))}
        
    </React.Fragment>
  )
}

export default Step3_Invitees;
