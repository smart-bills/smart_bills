import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_COMPLETE, REGISTER_FAIL } from './types';

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
