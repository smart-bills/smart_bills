import * as React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Home() {
  
  //const theme = createTheme();
  
  return (
    // <ThemeProvider theme={theme} fontFamily = 'Oxygen'>
    <div>
        <Link to="/login">
            <Button>
                Login
            </Button>
        </Link>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </div>
//   </ThemeProvider>
  )
}

export default Home; 