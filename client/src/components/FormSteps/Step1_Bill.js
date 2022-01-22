import React from 'react';
import { TextField, ToggleButtonGroup, ToggleButton, InputAdornment } from '@mui/material';

function Step1_Bill({storeName, setStoreName, billAmount, setBillAmount, splitBy, handleSplitChange}) {

  return (
    <React.Fragment>
      <ToggleButtonGroup
        color="primary"
        value={splitBy}
        exclusive
        onChange={handleSplitChange}
        fullWidth
        size='large'
      >
        <ToggleButton value="Split by People">Split by People</ToggleButton>
        <ToggleButton value="Split by Dishes">Split by Dishes</ToggleButton>
        <ToggleButton value="None">None</ToggleButton>
      </ToggleButtonGroup>
  
      <TextField
        autoFocus
        margin="dense"
        label="Store Name"
        type="text"
        variant="outlined"
        value={storeName}
        onChange={e => setStoreName(e.target.value)}
        required
        InputLabelProps={{
            shrink: true,
        }}
      />
                            
      <TextField
        margin="dense"
        label="How much was the bill?"
        type="text"
        variant="outlined"
        value={billAmount}
        onChange={e => setBillAmount(e.target.value)}
        required 
        InputProps={{startAdornment:(<InputAdornment position="start">$</InputAdornment>)}}
      />

    </React.Fragment>
  )
}

export default Step1_Bill;
