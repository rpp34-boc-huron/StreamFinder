import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './login.css';
import Register from './register';

export default function Login({ setToken, setUserData }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [status, setStatus] = useState();
    const [popup, setPopup] = useState(false);

    async function loginUser(credentials) {
        return fetch('http://localhost:8080/api/auth/login', {
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
        const token = await loginUser({
          username,
          password
        });
        if (token.token === 'test123') {
            var userInfo = {
                username: token['userData'][0]['username'],
                ownedServices: token['userData'][0]['ownedServices'],
                friends: token['userData'][0]['friends'],
                favorites: token['userData'][0]['favorites'],
                watchList: token['userData'][0]['watchList'],
            }
            setUserData(userInfo);
            console.log("this is the userInfo " + JSON.stringify(userInfo));
        }
        setToken(token.token);
        setStatus(token.message);
      }

    const handlePopup = () => {
        let modal = document.getElementById('popup');
        if (!popup) {
          modal.style.display = "block";
          setPopup(true);
        } else {
          modal.style.display = "none";
          setPopup(false);
        }
    }

    return(
      <div className="login-wrapper">
        <h1>Streamfinder</h1>
        <h2>Please Log In</h2>
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
            <button type="submit" className="button">Submit</button>
          </div>
        </form>
        <Register handlePopup={handlePopup}/>
        <div className='loginMessage'>{status}</div>
      </div>
    )
  }

  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };