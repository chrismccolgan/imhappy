import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserProfileContext } from '../UserProfile/UserProfileProvider';

const Login = () => {
  const history = useHistory();
  const { login, logout, isLoggedIn } = useContext(UserProfileContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => history.push('/'))
      .catch(() => alert('Invalid email or password'));
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit'>Login</button>
        </fieldset>
      </form>

      <button onClick={logout}>Logout</button>

      <p>{`Is logged in? ${isLoggedIn}`}</p>
    </>
  );
};

export default Login;
