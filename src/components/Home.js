import * as React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <div>
      
      <div className="row">
        <div className="logo">
          <img src='../../home.png' height='200' alt='Home Logo'/>
        </div>
      </div>
      
      <Copyright sx={{ mt: 8, mb: 4 }} />
    
    </div>
  )
}

export default Home; 