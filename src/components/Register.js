import React from 'react';
import { Redirect } from 'react-router-dom';


const Register = ({ 
    username,
    password, 
    confirmedPassword, 
    registerToken, 
    setRegisterToken, 
    setUsername, 
    setPassword, 
    setConfirmedPassword
 }) => {

    username, password, confirmedPassword, registerToken, setRegisterToken, setUsername, setPassword, setConfirmedPassword


    const registerUser = async (username, password) => {
        const resp = await fetch(
            "https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password
                    }
                })
            }
        );
        const data = await resp.json();
        const registerToken = data.data.token
        console.log(registerToken);
        setRegisterToken(registerToken);
        localStorage.setItem('registerToken', JSON.stringify(registerToken));
    };

    if (registerToken) {
        return <Redirect to='/' />
    }

    const handleClick = (event) => {
        event.preventDefault();
        registerUser(username, password).then((data) => {
        })
    };


    return (
        <div>
            <form onSubmit={handleClick}>
                <h2 className="intro">Registration</h2>
                <label className="username">Username</label>
                <input type='text' value={username} min='8' max='20' required onChange={(event) => setUsername(event.target.value)}></input>
                <label className="password">Password</label>
                <input type='password' value={password} min='8' max='20' required onChange={(event) => setPassword(event.target.value)}></input>
                <label className="rePassword">Re-enter Password</label>
                <input type='password' value={confirmedPassword} min='8' max='20' required onChange={(event) => setConfirmedPassword(event.target.value)}></input>
                <button type='submit'>Register</button>
            </form>
            <a className="existingUser" href='/'>Existing user? Log in</a>
        </div>
    )
}

export default Register;