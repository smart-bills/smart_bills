import React from 'react';
import { TextField, ToggleButtonGroup, ToggleButton, InputAdornment, Container } from '@mui/material';

function Step1_Bill(props) {

  const { storeName, setStoreName, 
          billAmount, setBillAmount, 
          description, setDescription, 
          splitBy, handleSplitChange } = props;

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
        {/* <ToggleButton value="None">None</ToggleButton> */}
      </ToggleButtonGroup>

      <Container component='div' sx={{display: 'flex', justifyContent: 'space-evenly', pt: 1, pb: 1}}>
        <TextField
          autoFocus
          margin="normal"
          label="Store name"
          type="text"
          variant="outlined"
          value={storeName}
          onChange={e => setStoreName(e.target.value)}
          required
          InputLabelProps={{shrink: true}}
        />
              
        <TextField
          margin="normal"
          label="How much was the bill?"
          type="text"
          variant="outlined"
          value={billAmount}
          onChange={e => setBillAmount(e.target.value)}
          required 
          InputProps={{startAdornment:(<InputAdornment position="start">$</InputAdornment>)}}
        />
      </Container>

      <TextField 
        margin='normal' 
        label='Description box' 
        type='text'
        value={description}
        onChangeCapture={e => setDescription(e.target.value)}
        multiline 
        rows={4} 
        fullWidth 
        InputLabelProps={{shrink: true}}  
      />

    </React.Fragment>
  )
}

export default Step1_Bill;
