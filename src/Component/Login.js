import React, { useState } from 'react';
import login from './Login.module.css';
import { SignIn, googleSignIn } from './firbase'; // Corrected the typo in 'firebase'
import { Link, useNavigate } from 'react-router-dom';
import google from '../Assert/google.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const handleLogin = async () => {
      console.log(email, password); // Log the email and password
      const respond = await SignIn(email, password); // Call the SignIn function
      if (respond){
        navigate("/Homepage");
      }else {
      }
  };
  const handlegoogle = async () => {
    const respond = await googleSignIn();
    if (respond){
      navigate("/Homepage");
    }else{

    }
  }


  return (
    <div className={login.login}>
      <h2>Login</h2>
      <form>
        <div>
          <label>username or email:</label>
          <input
            type="text"
            name="text"
            value={email} // Use 'value' instead of 'onChange'
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password} // Use 'value' instead of 'onChange'
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <Link to="/SignUp">Sign Up</Link>
        <div onClick={handlegoogle}> 
          <img src={google} alt='' /> 
        </div>

      </form>
    </div>
  );
}
