import React, {
  useEffect, 
  useState 
} from 'react';

import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';

import './style.js';

import {
  headerStyle
} from './style.js'

import {
  AccountForm,
  PostsList,
  PostsAdd,
  Nav,
  PostsView,
  Messages,
} from './components';

const App = () => {
  const [token, setToken] = useState( () => {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token')
    } else {
      return ''
    }
  });
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUser();
    console.log('user: ')
  }, [token])

  const fetchUser = async () =>{
    const response = await fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    })
    const data = await response.json();
    console.log(data)
    setUser(data.data)
  }


  return <>
      <h1 style={headerStyle}>Strangers Things</h1>
      {user?.username && <div>Hello {user?.username}</div> }
              <Nav token={token} setToken={setToken}/>
                <Route exact path="/login">
                  <AccountForm type={'login'} setToken={setToken} setUser={setUser}/>
                </Route>
                
                <Route exact path="/register">
                  <AccountForm type={'register'} setToken={setToken} setUser={setUser}/>
                </Route>

                <Route exact path ="/posts">
                  <PostsList posts={posts} setPosts={setPosts} token={token}/>
                </Route>

                <Route exact path='/'>
                  <h1>Welcome to Stranger's Things!</h1>
                </Route>

                <Route exact path='/posts/:id'>
                  <PostsView posts={posts} setPosts={setPosts}/>
                </Route>

                <Route exact path = "/createpost">
                  <PostsAdd posts={posts} setPosts={setPosts} token={token}/>
                </Route>

                <Route exact path = "/profile">
                  <Messages user={user}/>
                </Route>
  </> 

}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);