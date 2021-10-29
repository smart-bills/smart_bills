import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";

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

const theme = createTheme();

function Signup() {

    const [input, setInput] = useState({
        userID: '',
        email: '',
        name: '',
        password: ''
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            userID: input.userID,
            email: input.email,
            name: input.name,
            password: input.password 
        }
        axios.POST('http://localhost:8000/', newUser);
    };
  
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Smart Bills
            </Typography>
            <Box component="form" onClick={handleChange} noValidate sx={{ mt: 1 }}>
            <TextField
                
                margin="normal"
                required
                fullWidth
                id="userID"
                label="userID"
                name="userID"
                autoComplete="userID"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                autoComplete="email"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="name"
                type="name"
                id="name"
                autoComplete="name"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Box 
                sx={{
                display: 'flex',
                alignItems: 'left',
                }}
            >
            </Box>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onSubmit = {handleSubmit}
            >
                Sign Up
            </Button>
            </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
    )
}

export default Signup; 