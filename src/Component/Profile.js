import React, { useState, useEffect } from 'react';
import profile from './Profile.module.css';
import { SignOut, SaveData } from './firbase';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [firstLanguage, setFirstLanguage] = useState('');
  const [secondLanguage, setSecondLanguage] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const userLoggedIn = Cookies.get('user');
    if (!userLoggedIn) {
      navigate('/'); // Redirect to the login page if not logged in
    }
  }, [navigate]);
  const genderOptions = ["Male", "Female", "Other"];


  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleEmailChange =(e) =>{
    setEmail(e.target.value);
  }

  const handleFirstLanguageChange = (e) => {
    setFirstLanguage(e.target.value);
  };

  const handleSecondLanguageChange = (e) => {
    setSecondLanguage(e.target.value);
  };

  const handleSubmit = () => {
    
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('First Language:', firstLanguage);
    console.log('Second Language:', secondLanguage);
    console.log('Email', email);
    SaveData(firstName,lastName,age,gender,email,firstLanguage,secondLanguage);
  };
  const HandleSignOut = async() => {
    SignOut();
    navigate("/");
    
  }
  return (
    <div className={profile.profile}>
      <h2>Profile</h2>
      <button type='button' onClick={HandleSignOut}>
        Sign Out 
      </button>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
            <div>
            <label>Gender:</label>
            <select
                name="gender"
                value={gender}
                onChange={handleGenderChange}
            >
                <option value="">Select Gender</option>
                {genderOptions.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                ))}
            </select>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>First Language:</label>
          <input
            type="text"
            name="firstLanguage"
            value={firstLanguage}
            onChange={handleFirstLanguageChange}
          />
        </div>
        <div>
          <label>Second Language:</label>
          <input
            type="text"
            name="secondLanguage"
            value={secondLanguage}
            onChange={handleSecondLanguageChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
