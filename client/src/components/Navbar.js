import * as React from 'react';
import {Link} from 'react-router-dom';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

function Nav() {
  return (
      <div>
        <Link to='/'>
            <Button> SmartBills </Button>   
        </Link>

        <Link to='/login'>
            <Button> Log In </Button>
        </Link>

        <Link to='/signup'>
            <Button> Signup </Button>
        </Link>
      </div>
  )
}

export default Nav; 