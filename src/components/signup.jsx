import React, { useState } from "react";
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import '../index.css'

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signedUp, setSignedUp] = useState(false);
    const [error, setError] = useState('');
  
    const signup = async (event) => {
        event.preventDefault(); 
      
        try {
          const response = await axios.post('https://apitest.reachstar.io/signup', { name, email, password });
      
          const { data } = response;
          if (data.success) {
            setSignedUp(true);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('signedUp', true);
            return <Navigate to='/home' />;
          } else {
            setError('There was an error. Make sure you filled out everything in the form.');
          }
        } catch (error) {
          console.error('Error:', error);
          setError('An error occurred. Please try again.');
        }
      }
      
      
    if (signedUp) {
      return <Navigate to={'/home'} />;
    }
  
    return(
      <div className='container-fluid w-100 d-flex main-login-box' >
        <form onSubmit={signup} className=" login-form py-4">
        <span className="login-title">Sign up for free</span> <br />
        <div className="form-group m-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="John doe" className="form-control" onChange={(event) => setName(event.target.value)} value={name} />
          </div>
          <div className="form-group m-2">
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="example@gmail.com" className="form-control" onChange={(event) => setEmail(event.target.value)} value={email} />
          </div>
          <div className="form-group m-2">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="*********" className="form-control" onChange={(event) => setPassword(event.target.value)} value={password}/>
          </div>
          <div className="sign-up-text px-2"><p>Already have an account? </p>  <Link to="/">Log in</Link></div>
          {error && <p className="text-danger">{error}</p>}
          <div className="form-group m-2">
            <input type="submit" className="btn btn-danger" />
          </div>
  
        </form>
      </div>
    );
  }

export default SignUp