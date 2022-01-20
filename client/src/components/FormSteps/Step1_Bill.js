import React from 'react';
import { TextField } from '@mui/material';

function Step1_Bill({storeName, setStoreName, billAmount, setBillAmount}) {

  return (
    <React.Fragment>
    
        <TextField
            autoFocus
            margin="dense"
            label="Store Name"
            type="text"
            variant="outlined"
            value={storeName}
            onChange={e => setStoreName(e.target.value)}
            required
        />
                            
        <TextField
            margin="dense"
            label="Bill Amount"
            type="text"
            variant="outlined"
            value={billAmount}
            onChange={e => setBillAmount(e.target.value)}
            required 
        />

    </React.Fragment>
  )
}

export default Step1_Bill;
