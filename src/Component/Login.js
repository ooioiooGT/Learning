import React, { useState } from 'react';
import login from './Login.module.css';
import { SignIn } from './firbase'; // Corrected the typo in 'firebase'
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const handleLogin = async () => {
    try {
      console.log(email, password); // Log the email and password
      await SignIn(email, password); // Call the SignIn function
    } catch (error) {
      console.error("Sign-in failed:", error.message);
    }
  };
  

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

      </form>
    </div>
  );
}
