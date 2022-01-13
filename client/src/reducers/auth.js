import { REGISTER_COMPLETE, REGISTER_FAIL } from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	user: null,
};

function Auth(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case REGISTER_COMPLETE:
			localStorage.setItem('token', payload.token);

			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case REGISTER_FAIL:
			localStorage.removeItem('token');

			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
}

export default Auth;
