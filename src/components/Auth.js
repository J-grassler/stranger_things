import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../api";

const Auth = (props) => {
  const { setIsLoggedIn } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {errorMessage ? <h5 className="error">{errorMessage}</h5> : null}
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="username"
      />
      <button
        onClick={async () => {
          try {
            await auth(username, password, true);
            setIsLoggedIn(true);
          } catch (error) {
            setErrorMessage(error.message);
          }
        }}
      >
        Register
      </button>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
      />

      <button
        onClick={async () => {
          try {
            const result = await auth(username, password);
            setIsLoggedIn(true);
          } catch (error) {
            setErrorMessage(error.message);
          }
        }}
      >
        Log In
      </button>
    </form>
  );
};

const Nav = () => {
  return (
    <>
      <Link to="/messages">
        <button>PROFILE</button>
      </Link>
      <Link to="/newpost">
        <button>NEW POST</button>
      </Link>
    </>
  );
};

export default Auth;
export { Nav };