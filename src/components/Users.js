import React, {useEffect, useState} from 'react'

function Users (props) {
    const [user, setUser] = useState([{
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
            {console.log(this.state)}
        </div>
    )
}

export default Users