import React from 'react'
import { Link } from 'react-router-dom';

const Profile = ({logout}) => {
    
    return (
        <div>
            <Link to='/dashboard'>To Dashboard</Link>
            <h1>Hi Youre Logged in</h1>
            <button onClick={logout}>log Out</button>
            
        </div>
    )
}

export default Profile;
