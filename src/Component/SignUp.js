import React, { useState } from 'react';
import signup from './SignUp.module.css';
import { Signup } from './firbase'; // Rename import to avoid conflicts with the component
import { Link , useNavigate} from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    try{
        console.log(email, password); // Log the email and password
        Signup(email, password); // Call the SignUp function
        navigate("/Profile");
    }catch (error){
        console.error("Sign-up failed:", error.message);
    }};

  return (
    <div className={signup.signup}>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Username or Email:</label>
          <input
            type="text"
            name="text"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleSignUp}>
          Signup
        </button>
        <Link to="/">Signin</Link>
      </form>
    </div>
  );
}
