import axios from 'axios';
import { setAlert } from './alert';
import {
	REGISTER_COMPLETE,
	REGISTER_FAIL,
	CLEAR_USER,
	LOGOUT,
	// LOGIN_FAIL,
	// LOGIN_SUCCESS,
	LOADED_USER,
	USER_ERROR,
} from './types';

// Signup user
export const signUp =
	({ userName, email, password }) =>
	async dispatch => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const body = JSON.stringify({ userName, email, password });
		try {
			const res = await axios.post('/app/register', body, config);

			dispatch({
				type: REGISTER_COMPLETE,
				payload: res.data,
			});
		} catch (err) {
			const errors = err.response.data.errors;

			if (errors) {
				errors.forEach(error => dispatch(setAlert(error.msg)));
			}
			dispatch({ type: REGISTER_FAIL });
		}
	};

// // login user
// export const login = (email, password) => async dispatch => {
// 	const config = {
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	};
// 	const body = JSON.stringify({ email, password });
// 	try {
// 		const res = await axios.post('/app/auth', body, config);

// 		dispatch({
// 			type: LOGIN_SUCCESS,
// 			payload: res.data,
// 		});
// 		dispatch(loadUser());
// 	} catch (err) {
// 		const errors = err.response.data.errors;

// 		if (errors) {
// 			errors.forEach(error => dispatch(setAlert(error.msg)));
// 		}
// 		dispatch({ type: LOGIN_FAIL });
// 	}
// };

// Logout user
export const logout = () => dispatch => {
	dispatch({ type: CLEAR_USER });
	dispatch({ type: LOGOUT });
};

// Load User
export const loadUser = token => async dispatch => {
	const config = {
		headers: {
			'x-auth-token': token,
		},
	};
	try {
		const res = await axios.get('/app/auth', config);

		dispatch({
			type: LOADED_USER,
			payload: res.data,
		});
	} catch (err) {
		dispatch({ type: USER_ERROR });
	}
};
