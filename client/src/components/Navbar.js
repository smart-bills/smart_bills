import * as React from 'react';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

function Nav({ auth: { isAuthenticated, loading }, logout }) {
	const token = localStorage.getItem('token');

	const loggedIn = (
		<Toolbar>
			<IconButton
				size='large'
				edge='start'
				color='inherit'
				aria-label='menu'
				sx={{ mr: 2 }}
			></IconButton>
			<Button href='/' onClick={logout} color='inherit' variant='text'>
				Logout
			</Button>
		</Toolbar>
	);
	const guest = (
		<Toolbar>
			<IconButton
				size='large'
				edge='start'
				color='inherit'
				aria-label='menu'
				sx={{ mr: 2 }}
			></IconButton>
			<Stack direction='row' spacing={1}>
				<Button href='/' Button color='inherit' variant='text'>
					Home
				</Button>
				<Button href='/login' Button color='inherit' variant='text'>
					Login
				</Button>
				<Button href='/signup' Button color='inherit' variant='text'>
					Sign up
				</Button>
			</Stack>
		</Toolbar>
	);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					></IconButton>
					<Typography
						href='/'
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
					>
						SmartBills
					</Typography>

					{token ? loggedIn : guest}
				</Toolbar>
			</AppBar>
		</Box>
	);
}

Nav.prototype = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
	auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Nav);