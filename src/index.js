import React, {
  useEffect, 
  useState 
} from 'react';

import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';

import {
  Accounts,
  List,
  AddPost,
  NavMenu,
  PostsView,
  Messages,
} from './components';

import {
    fetchUser
} from './api'

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
    fetchUser;
    console.log('user: ')
  }, [token])

  return <>
      <h1>Strangers Things</h1>
      {user?.username && <div>Hello {user?.username}</div> }
              <NavMenu token={token} setToken={setToken}/>
                <Route exact path="/login">
                  <Accounts type={'login'} setToken={setToken} setUser={setUser}/>
                </Route>
                
                <Route exact path="/register">
                  <Accounts type={'register'} setToken={setToken} setUser={setUser}/>
                </Route>

                <Route exact path ="/posts">
                  <List posts={posts} setPosts={setPosts} token={token}/>
                </Route>

                <Route exact path='/'>
                  <h1>Welcome to Stranger's Things!</h1>
                </Route>

                <Route exact path='/posts/:id'>
                  <PostsView posts={posts} setPosts={setPosts} token={token}/>
                </Route>

                <Route exact path = "/createpost">
                  <AddPost posts={posts} setPosts={setPosts} token={token}/>
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