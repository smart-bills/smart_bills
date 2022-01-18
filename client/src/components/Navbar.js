import * as React from 'react';
import { Link } from 'react-router-dom';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

function Nav({ logout }) {
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
			<Link to='/' onClick={logout}>
				<Button> Logout </Button>
			</Link>
		</div>
	);
}

export default connect(null, { logout })(Nav);
