import * as React from 'react';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Nav({ logout }) {
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
			<Button
				href='/'
				onClick={logout}
				color='inherit'
				variant='text'
				startIcon={<LogoutOutlinedIcon />}
			>
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
				<Button
					href='/login'
					color='inherit'
					variant='text'
					startIcon={<LoginOutlinedIcon />}
				>
					Sign In
				</Button>
				<Button
					href='/signup'
					color='inherit'
					variant='text'
					startIcon={<HowToRegOutlinedIcon />}
				>
					Sign Up
				</Button>
			</Stack>
		</Toolbar>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed'>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Link
						variant='h6'
						underline='none'
						color='inherit'
						href='/'
						sx={{ fontSize: 24, textAlign: 'center' }}
					>
						{'SmartBills'}
					</Link>

				<Link
					variant="h6"
					underline="none"
					color="inherit"
					href="/"
					sx={{ fontSize: 24,  textAlign: 'center'}}
				>
            			{'SmartBills'}
          		</Link>

				<Box sx={{ flex: 1 }} />

					{token ? loggedIn : guest}
				</Toolbar>
			</AppBar>
		</Box>
	);
}

const mapStateToProps = state => ({
	auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Nav);