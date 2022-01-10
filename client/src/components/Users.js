import React, {useEffect, useState} from 'react'

function Users() {
    const [users, setUser] = useState([{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }])

    useEffect(()=>{
        fetch("/app/user").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUser(jsonRes));
    })
    return (
        <div>
            Welcome back
            {users.map(user =>
                <div key={user.email}>
                    <h1>{user.firstName}</h1> 
                </div>
            )}
        </div>
    )
}

export default Users