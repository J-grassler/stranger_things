import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import {
  Title,
  Profile,
  Register,
  UserLogin,
  Posts,
  CreatePostForm,
  Messages
} from './components';
import { deleteToken } from './api';

const App = () => {

  const [username, setUsername] = useState('');
  const [post, setPost] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [registerToken, setRegisterToken] = useState('');
  const [token, setLoginToken] = useState('');
  const [postId, setPostId] = useState('');
  const [postTitle, setTitle] = useState('');
  const [postDescription, setDescription] = useState('');
  const [postPrice, setPrice] = useState('');
  const [postLocation, setLocation] = useState('');
  const [willDeliver, setDelivery] = useState(false);
  const [posts, setPosts] = useState([]);


  return (
    <Router>
      <div className="app">
        <Route exact path='/home'>
          <Title />

          <nav>
            <Link to='/home'><button>Home</button></Link>
            <Link to='/posts'><button>Posts</button></Link>
            <Link to='/profile'><button>Profile</button></Link>
            <Link to='/'><button>Login</button></Link>
            <Link to='/register'><button>Register</button></Link>
            <Link to='/' onClick={() => { deleteToken() }}><button>Logout</button></Link>
          </nav>

          <h1 className="intro">Buy a strangers things, or sell even stranger things.</h1>
        </Route>

        <main>
          <Switch>

            <Route exact path='/'>
              <Title />
              <nav>
                <Link to='/home'><button>Home</button></Link>
                <Link to='/posts'><button>Posts</button></Link>
                <Link to='/profile'><button>Profile</button></Link>
                <Link to='/'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
                <Link to='/' onClick={() => { deleteToken() }}><button>Logout</button></Link>
              </nav>
              <UserLogin username={username} password={password} setUsername={setUsername} setPassword={setPassword}
                token={token} setLoginToken={setLoginToken} />
            </Route>

            <Route exact path='/posts'>
              <Title />
              <nav>
                <Link to='/home'><button>Home</button></Link>
                <Link to='/posts'><button>Posts</button></Link>
                <Link to='/profile'><button>Profile</button></Link>
                <Link to='/'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
                <Link to='/' onClick={() => { deleteToken() }}><button>Logout</button></Link>
              </nav>
              <Posts posts={posts} setPosts={setPosts} setPost={setPost} post={post} token={token} />
            </Route>

            <Route exact path='/createpost'>
              <Title />
              <nav>
                <Link to='/home'><button>Home</button></Link>
                <Link to='/posts'><button>Posts</button></Link>
                <Link to='/profile'><button>Profile</button></Link>
                <Link to='/'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
                <Link to='/' onClick={() => { deleteToken() }}><button>Logout</button></Link>
              </nav>
              <CreatePostForm token={token} postId={postId} setPostId={setPostId} postTitle={postTitle}
                setTitle={setTitle} postDescription={postDescription} setDescription={setDescription}
                postPrice={postPrice} setPrice={setPrice} postLocation={postLocation}
                setLocation={setLocation} willDeliver={willDeliver} setDelivery={setDelivery} />
            </Route>

            <Route exact path='/profile'>
              <Title />
              <nav>
                <Link to='/home'><button>Home</button></Link>
                <Link to='/posts'><button>Posts</button></Link>
                <Link to='/profile'><button>Profile</button></Link>
                <Link to='/'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
                <Link to='/' onClick={() => { deleteToken() }}><button>Logout</button></Link>
              </nav>
              <Profile />
            </Route>

            <Route exact path='/register'>
              <Title />
              <nav>
                <Link to='/home'><button>Home</button></Link>
                <Link to='/posts'><button>Posts</button></Link>
                <Link to='/profile'><button>Profile</button></Link>
                <Link to='/'><button>Login</button></Link>
                <Link to='/' onClick={() => { deleteToken() }}><button>Logout</button></Link>
              </nav>
              <Register username={username} password={password} confirmedPassword={confirmedPassword}
                registerToken={registerToken} setUsername={setUsername} setPassword={setPassword}
                setConfirmedPassword={setConfirmedPassword} setRegisterToken={setRegisterToken} />
            </Route>

            <Route exact path="/messages/:postId" >
              <Title />
              <nav>
                <Link to='/home'><button>Home</button></Link>
                <Link to='/posts'><button>Posts</button></Link>
                <Link to='/'><button>Login</button></Link>
                <Link to='/register'><button>Register</button></Link>
                <Link to='/' onClick={() => { deleteToken() }}><button>Logout</button></Link>
              </nav>
              <Messages token={token} />
            </Route>

          </Switch>
        </main>

      </div>
    </Router>
  )
}


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
)