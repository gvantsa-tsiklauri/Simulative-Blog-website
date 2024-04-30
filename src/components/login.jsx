import React, { useState } from "react";
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import '../index.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const login = async (event) => {
    event.preventDefault(); 
  
    try {
      const response = await axios.post('https://apitest.reachstar.io/signin', { email, password });
  
      const { data } = response;
      if (data.success) {
        setLoggedIn(true);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('loggedIn', true);
        return <Navigate to='/home' />;
      } else {
        setError('Incorrect email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again with correct email or password.');
    }
  }
  

  if (loggedIn) {
    return <Navigate to={'/home'} />;
  }

  return(
    <div className='container-fluid w-100 d-flex main-login-box' >
      <form onSubmit={login} className=" login-form py-4">
      <span className="login-title">Log in your account</span> <br />
        <div className="form-group m-2">
          <label htmlFor="">E-mail</label>
          <input type="email" placeholder="example@gmail.com" className="form-control" onChange={(event) => setEmail(event.target.value)} value={email} />
        </div>
        <div className="form-group m-2">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="*********" className="form-control" onChange={(event) => setPassword(event.target.value)} value={password}/>
        </div>
        <div className="sign-up-text px-2"><p>don't have an account?  <Link to="/signup">Sign up for free</Link> </p> </div>
        {error && <p className="text-danger">{error}</p>}
        <div className="form-group m-2">
          <input type="submit" className="btn btn-lg btn-danger" />
        </div>

      </form>
    </div>
  );
}

export default Login;
