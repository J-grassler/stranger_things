import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 



const Nav = ({token, setToken}) => {

    return <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/posts">Posts</Link>
            {token && <Link to="/profile">Profile</Link>}
            {token && <Link to="/createpost">Add Posts</Link>}
            { token && <button onClick = {
                () => {
                    localStorage.removeItem('token')
                    setToken('')
                }
            }> Logout</button>}
        </nav>
    </>

}


export default Nav;