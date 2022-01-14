import React, {useEffect, useState} from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
// import {decode} from 'jsonwebtoken';

function Dashboard() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if(token) {
    //         const user = decode(token);
    //         if(!user) {
    //             localStorage.removeItem('token');
    //             navigate('/login');
    //         }
    //     }
    // })

    return (
        <div>
        
            {/* navigate is a function that can be used to redirect user. */}
            <button onClick={() => navigate('/login')}>
                Click to go back to the log in page.
            </button>

            {/* Navigate can be used to check if the user is authed. If not, use it to redirect user back. */}
            {/* <Navigate to='/login' /> */}

            Welcome back
        </div>
    )
}

export default Dashboard