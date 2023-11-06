import React from 'react';
import { SignOut } from './Component/firbase';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const HandleSignOut = async() => {
    SignOut();
    navigate("/");
    
  }
  return (
  <div>
    <ul>
      <li>homepage</li>
      <li>about</li>
      <li>test</li>
    </ul>
    <button type='button' onClick={HandleSignOut}>
    Sign Out 
    </button>
  </div>
  )
}
