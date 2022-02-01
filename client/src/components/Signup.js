/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { signUp } from '../actions/auth';

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

import axios from 'axios';

const Signup = () => {
	/* 
		Username must start with a letter.
		Followed by letters, numbers, hyphon or underscore.
		At least 3 characters and at most 23 characters.
	*/
	const USERNAME_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;

	/* 
		Password must have 1 upper and lower case letter
		At least 5 letters and at most 20 letters.
	*/
	const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

	/* 
		Email will be very flexible since we don't target certain domains.
		Any form of user@domain.com or user@domain.edu would work.
		The ending does not matter.
	*/
	const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

	const [formData, setFormData] = useState({
		userName: '',
		email: '',
		password: '',
		password_confirm: '',
	});
	const { userName, email, password, password_confirm } = formData;

	const [hasUserNameError, setHasUserNameError] = useState(false);
	useEffect(() => {
		if (userName.length === 0) {
			setHasUserNameError(false);
			return;
		}

		if (USERNAME_REGEX.test(userName)) setHasUserNameError(false);
		else setHasUserNameError(true);
	}, [userName]);

	const [hasEmailError, setHasEmailError] = useState(false);
	useEffect(() => {
		if (email.length === 0) {
			setHasEmailError(false);
			return;
		}

		if (EMAIL_REGEX.test(email)) setHasEmailError(false);
		else setHasEmailError(true);
	}, [email]);

	const [hasPasswordError, setHasPasswordError] = useState(false);
	useEffect(() => {
		if (password.length === 0) {
			setHasPasswordError(false);
			return;
		}

		if (PASSWORD_REGEX.test(password)) setHasPasswordError(false);
		else setHasPasswordError(true);
	}, [password]);

	const [isPasswordMatched, setIsPasswordMatched] = useState(false);
	useEffect(() => {
		if (password_confirm.length === 0) {
			setIsPasswordMatched(true);
			return;
		}

		if (password_confirm === password) setIsPasswordMatched(true);
		else setIsPasswordMatched(false);
	}, [password_confirm, password]);

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();

		// First check if the fields are empty.
		if (!(userName && email && password && password_confirm)) return;

		// Then check if there's any errors for each field.
		if (hasUserNameError || hasEmailError || hasPasswordError) return;
		if (!isPasswordMatched) return;

		try {
			const body = {
				userName: userName,
				email: email,
				password: password,
			};
			const { data } = await axios.post('/app/register', body);
			if (data.existed) {
				alert('This email address is already registred.');
				return;
			}

			if (data.successful) {
				localStorage.setItem('token', data.token);
				window.location.replace('/dashboard');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container component='main' maxWidth='xs' sx={{ mt: 15 }}>
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
								error={hasUserNameError}
							/>
							{hasUserNameError && (
								<Typography
									paragraph
									variant='subtitle2'
									sx={{ color: '#ed1414cc', m: 0, pl: 1.5 }}
								>
									User name must begin with a letter and at least 3 chatacters.
									No symbols allowed.
								</Typography>
							)}
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
							{hasEmailError && (
								<Typography
									paragraph
									variant='subtitle2'
									sx={{ color: '#ed1414cc', m: 0, pl: 1.5 }}
								>
									Email format must be: user@domain.com.
								</Typography>
							)}
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
								error={hasPasswordError}
								autoComplete=''
							/>
							{hasPasswordError && (
								<Typography
									paragraph
									variant='subtitle2'
									sx={{ color: '#ed1414cc', m: 0, pl: 1.5 }}
								>
									{
										'Password must have 1 upper and lower case letter. It must be at least 6 letters and at most 16 letters.'
									}
								</Typography>
							)}
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
								error={!isPasswordMatched}
							/>
							{!isPasswordMatched && (
								<Typography
									paragraph
									variant='subtitle2'
									sx={{ color: '#ed1414cc', m: 0, pl: 1.5 }}
								>
									{'Passwords do not match.'}
								</Typography>
							)}
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
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, signUp })(Signup);
