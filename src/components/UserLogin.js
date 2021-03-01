import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { fetchToken, saveToken } from '../api';

const UserLogin = ({ 
  username, 
  setUsername, 
  password, 
  setPassword 
}) => {
  
  const history = useHistory()

  const loginUser = async (username, password) => {
    const resp = await fetch(
      "https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/login",
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
    return await resp.json();
  };

  const handleClick = (event) => {
    event.preventDefault();
    loginUser(username, password).then((data) => {
      console.log(data);
      const token = data.data.token;
      saveToken(token);

      console.log(token);
      history.push('/home')
    })
  };

  if (fetchToken()) {
    return <Redirect to='/home' />
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <h2 className="intro">Login</h2>
        <label className="fields">Username</label>
        <input type='text' value={username} placeholder='Username' min='8' max='20' required onChange={(event) => setUsername(event.target.value)}></input>
        <label className="fields">Password</label>
        <input type='password' value={password} placeholder='Password' min='8' max='20' required onChange={(event) => setPassword(event.target.value)}></input>
        <input type='submit' />
      </form>
      <a className="newUser" href='/register'>Not registered? Sign up</a>
    </div>
  )
}

export default UserLogin;