import React, { useState } from 'react';
import {Link, 
  useHistory
} from 'react-router-dom'; 

const Accounts = ({type, setToken, setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const title = type === 'login' ? 'Login' : 'Register';
  const SwitchTitle = type === 'login' ? 'Register' : 'Login';
  const SwitchType = type === 'login' ? 'register' : 'login';
  const history = useHistory();


  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('username: ', username);
    console.log('password: ', password);
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/${type}`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    });
    const {data} = await response.json();
    const token = data?.token;
    if (token) {
      localStorage.setItem('token', token)
      setToken(token);
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const {data} = await response.json();
      console.log('data: ', data);
      setUser(data);
    
    setUsername('');
    setPassword('');
    history.push('./posts')
    }
  }

  return <>
    <h2>{title}</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(ev) => setUsername(ev.target.value)}placeholder="username"></input>
      <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)}placeholder="password"></input>
      <button type="submit">{title}</button>
    </form>    
    <Link to={`/${SwitchType}`}>{SwitchTitle}</Link>
  </>
}

export default Accounts;