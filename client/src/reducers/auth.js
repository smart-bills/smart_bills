import {
	REGISTER_COMPLETE,
	REGISTER_FAIL,
	LOGOUT,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOADED_USER,
	USER_ERROR,
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null,
};

function Auth(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOADED_USER:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
			};
		case REGISTER_COMPLETE:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token);

			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case REGISTER_FAIL:
		case LOGIN_FAIL:
		case LOGOUT:
		case USER_ERROR:
			localStorage.removeItem('token');

			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
			};
		default:
			return state;
	}
}

export default Auth;
