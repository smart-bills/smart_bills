import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { signUp } from '../actions/auth';
import PropTypes from 'prop-types';

// Material-UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Signup = ({ setAlert, signUp, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		userName: '',
		email: '',
		password: '',
		password_confirm: '',
	});

	const { userName, email, password, password_confirm } = formData;

	const onChange = event =>
		setFormData({ ...formData, [event.target.name]: event.target.value });

	const onSubmit = async event => {
		event.preventDefault();
		if (password !== password_confirm) {
			setAlert('Password does not match');
		} else {
			signUp({ userName, email, password });
		}
	};

	if (isAuthenticated) {
		return <Navigate to='/dashboard' />;
	}
	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs' sx={{mt: 15}}>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign up
					</Typography>
					<Box component='form' noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='userName'
									label='User Name'
									name='userName'
									value={userName}
									onChange={onChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									value={email}
									onChange={onChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									value={password}
									label='Password'
									type='password'
									id='password1'
									onChange={onChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password_confirm'
									value={password_confirm}
									label='Confirm Password'
									type='password'
									id='password2'
									onChange={onChange}
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link href='/login' variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

Signup.propTypes = {
	setAlert: PropTypes.func.isRequired,
	signUp: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, signUp })(Signup);
