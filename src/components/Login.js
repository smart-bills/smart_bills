import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'

const theme = createTheme();

function Login() {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const data = new FormData(event.currentTarget);
    const loginInfo = {
      email: data.get('email'),
      password: data.get('password')
    }
    console.log(loginInfo) 
  }

	async function loginUser(event) {
		event.preventDefault()

    const response = await fetch('http://localhost:8000/app/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
      }),
		})

		const data = await response.json()
		if (data.user) {
			localStorage.setItem('token', data.user);
			alert('Login successful');
			window.location.href = '/dashboard';
		} else  
        alert('Please check your username and password');
	}

  return (
    <ThemeProvider theme={theme} onSubmit={loginUser}>
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'left',
            }}
          >
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"  />}
              label="Remember me"
            />
          </Box>
          <Button type="submit" value="Login" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} > 
          {/* href="/user"   */}
              Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )
}

export default Login;  