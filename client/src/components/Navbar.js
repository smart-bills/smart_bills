import * as React from 'react';
import { Link } from 'react-router-dom';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Nav({ auth: { isAuthenticated, loading }, logout }) {
	const token = localStorage.getItem('token');

	const loggedIn = (
		<div>
			<Link to='/' onClick={logout}>
				<Button> Logout </Button>
			</Link>
		</div>
	);
	const guest = (
		<div>
			<Link to='/login'>
				<Button> Log In </Button>
			</Link>

			<Link to='/signup'>
				<Button> Signup </Button>
			</Link>
		</div>
	);
	return (
		<div>
			<Link to='/'>
				<Button> SmartBills </Button>
			</Link>
			{token ? loggedIn : guest}
		</div>
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