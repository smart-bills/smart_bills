import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

export default combineReducers({
	// Combine any reducers that we made
	alert,
	auth,
});
