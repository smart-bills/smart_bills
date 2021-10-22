import * as React from 'react';
import {Link} from 'react-router-dom';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

function Nav() {
  
  //const theme = createTheme();
  
  return (
    //<ThemeProvider theme={theme} fontFamily = 'Oxygen'>
        <Link to='/'>
            <Button>
            !!!!!!!!!!This is Nav bar!!!!!!!!!
            </Button>
        </Link>
  //</ThemeProvider>
  )
}

export default Nav; 