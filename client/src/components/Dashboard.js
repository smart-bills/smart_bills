import React, { useEffect, useState } from 'react';
// import { useNavigate, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import { connect } from 'react-redux';
import { loadUser } from '../actions/auth';

function Dashboard({ loadUser }) {
	const navigate = useNavigate();
	const [bills, setBills] = useState();

	useEffect(() => {
		const token = localStorage.getItem('token');

		// Check to see if there's a token.
		// Then get all the bills for that user.
		if (token) {
			loadUser(token);
			const { user } = jwt_decode(token);
			if (!user) {
				localStorage.removeItem('token');
				navigate('/login');
			}

			getBills(token, user.id);
		} else {
			navigate('/login');
		}

		// Query the backend and database to get all the bills.
		async function getBills(token, userid) {
			const url = `http://localhost:8000/app/bill/?userid=${userid}`;
			const headers = { 'x-auth-token': token };
			const res = await axios.get(url, { headers });

			if (res.error) {
				console.log(res.error);
			} else {
				console.log(res.data.bills);
				setBills(res.data.bills);
			}

			// if(res.bills?.length === 0) {
			//     console.log('You have no bills at the moment');
			// } else {
			//     setBills(...res.bills);
			// }
		}
	}, [loadUser, navigate]);

	return (
		<div>
			{/* navigate is a function that can be used to redirect user. */}
			{/* <button onClick={() => navigate('/login')}>
                Click to go back to the log in page.
            </button> */}
			{/* Navigate can be used to check if the user is authed. If not, use it to redirect user back. */}
			{/* <Navigate to='/login' /> */}
			Welcome back! Here is all your bills.
			<div>{bills && bills.map(bill => bill.storeName)}</div>
		</div>
	);
}

export default connect(null, { loadUser })(Dashboard);
