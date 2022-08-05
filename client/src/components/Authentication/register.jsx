import React, { useState, useEffect } from 'react';
import './login.css';

export default function Register({handlePopup}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [registerMessage, setRegisterMessage] = useState();

    async function registerUser(credentials) {
        return fetch('http://localhost:8080/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
       }
    

    const handleSubmit = async e => {
        e.preventDefault();
        const register = await registerUser({
          username,
          password
        });
        setRegisterMessage(register.message);
        setUserName('');
        setPassword('');
      }

    return(
      <div>
          <div id='popup' className='modal'>
            <div className="modal-content">
              <span onClick={()=>{handlePopup()}} className="close">&times;</span>
              <div className="login-wrapper">
                <h1>Create Account</h1>
                <form onSubmit={handleSubmit}>
                  <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                  </label>
                  <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                  </label>
                  <div>
                    <p>Account Creation Rules</p>
                    <ul>
                      <li>Username must be unique, existing usernames will not be accepted</li>
                      <li>Password must be longer than 6 characters</li>
                    </ul>
                  </div>
                  <div>
                    <button className='button' type="submit">Submit</button>
                    <p>By clicking submit I agree to create account and store both username/password</p>
                  </div>
                </form>
                <div className="loginMessage">{registerMessage}</div>
              </div>
            </div>
          </div>
          <div onClick={()=>{handlePopup()}} className='register'>Click here to register!</div>
        </div>
    )
  }