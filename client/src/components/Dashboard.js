import React, {useEffect, useState} from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/login')}>
                Click to go back to the log in page.
            </button>
        
            Welcome back
        </div>
    )
}

export default Dashboard