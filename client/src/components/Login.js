import * as React from 'react';
import {
	Avatar,
	Alert,
	Button,
	CssBaseline,
	// Checkbox,
	Link,
	Grid,
	Box,
	TextField,
	Typography,
	Container,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import axios from 'axios';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isInvalid, setIsInvalid] = useState(false);
	const [invalidMessage, setInvalidMessage] = useState('');

	async function loginUser(event) {
		event.preventDefault();

		const loginInfo = { email, password };
		const response = await axios.post(
			'http://localhost:8000/app/auth',
			loginInfo
		);
		const data = response.data;

		if (data.errors) {
			setInvalidMessage(data.errors[0].msg);
			setIsInvalid(true);
		}

		if (data.error) {
			setInvalidMessage(data.error);
			setIsInvalid(true);
		}

		if (data.token) {
			localStorage.setItem('token', data.token);
			window.location.href = '/dashboard';
		}
	}

	return (
			<Container component='main' maxWidth='xs'>
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

					<Typography component='h1' variant='h5'>
						Smart Bills
					</Typography>

					{isInvalid && (
						<Alert
							severity='warning'
							onClose={() => {
								setIsInvalid(false);
							}}
						>
							{invalidMessage}
						</Alert>
					)}

					<Box component='form' onSubmit={loginUser} noValidate sx={{ mt: 1 }}>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							placeholder='Email'
							autoComplete='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							type='email'
							autoFocus
						/>

						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder='Password'
						/>

						<Button
							type='submit'
							value='Login'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>

						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2' />
							</Grid>

							<Grid item>
								<Link href='/signup' variant='body2'>
									{' '} Don't have an account? Sign Up {' '}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
	);
}

export default Login;
