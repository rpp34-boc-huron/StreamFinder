import React, { useEffect, useState } from 'react';
import { TextField, InputLabelProps } from "@material-ui/core";
import axios from "axios";

const Login = (props) => {
  const { setUsername } = props;
  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [errorOnUsername, setErrorOnUsername] = useState('');
  const [errorOnPassword, setErrorOnPassword] = useState('');
  let errCount = 0;

  const login = (signup=false) => {
    let username = document.getElementById('username-input').value;
    let password = document.getElementById('password-input').value;

    // Validation
    if (signup) {
      if (username.length < 4) {
        setUsernameErr(true);
        setErrorOnUsername('Username Should Be Longer Than 4 Characters!');
      }
      if (password.length < 6) {
        setPasswordErr(true);
        setErrorOnPassword('Password Should Be Longer Than 6 Characters');
      }

      if (username.length < 4 || password.length < 6) return;
    }

    axios({
      method: 'post',
      url: signup? '/sase/signup' : '/sase/login',
      data: {username, password}
    })
    .then(() => setUsername(username))
    .catch((err) => {
      if (err.response.data === 'Unauthorized' && errCount !== 0) {
        setUsernameErr(true);
        setErrorOnPassword(err.response.data);
        setPasswordErr(true);
        setErrorOnUsername(err.response.data);
      } else if (signup && errCount!==0) {
        setUsernameErr(true);
        setErrorOnUsername(err.response.data);
      } else if (errCount !== 0) {
        setUsernameErr(true);
        setErrorOnUsername(err.response.data);
      }
      errCount++;
    });
  };

  useEffect(() => login(false), []);

  return (
    <div className="login-upper-container">
      <div className="login-container">
        <div className="login-header">
          <div className="stream-finder-logo-login"></div>
          <div className="login-title">
            StreamFinder
          </div>
        </div>
        <TextField onKeyUp={(e) => e.key==='Enter'? login(false) : ''} id='username-input' variant='outlined' label="Username" InputLabelProps={{shrink: true}} error={usernameErr} helperText={errorOnUsername}/>
        <TextField onKeyUp={(e) => e.key==='Enter'? login(false) : ''}  id='password-input' variant='outlined' label="Password" InputLabelProps={{shrink: true}} error={passwordErr} helperText={errorOnPassword}/>
        <div className="login-btn-interactions">
          <button className="login-btn" onClick={() => login(false)}>Login</button>
          <button className="login-btn" onClick={() => login(true)}>Signup</button>
        </div>
      </div>
    </div>
  );
};
 
export default Login;