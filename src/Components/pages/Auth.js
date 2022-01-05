import React from 'react'
import { useNavigate } from 'react-router-dom';

const Auth = ({authenticate}) => {
    const navigate = useNavigate("");

    const auth = () => {
        authenticate();
        navigate("/profile");

    }

    return (
        <div>
             <h2>Please Authenticate</h2>
             <button onClick={auth}>Authenicate</button>
            
        </div>
    )
}

export default Auth;
