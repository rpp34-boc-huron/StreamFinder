import React, { useEffect } from 'react';
import { TextField, InputLabelProps } from "@material-ui/core";
import axios from "axios";

const Login = (props) => {
  const { setUsername } = props;

  const login = (signup=false) => {
    let username = document.getElementById('username-input').value;
    let password = document.getElementById('password-input').value;

    axios({
      method: 'post',
      url: signup? '/sase/signup' : '/sase/login',
      data: {username, password}
    })
    .then(() => setUsername(username))
    .catch((err) => err);
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
        <TextField id='username-input' variant='outlined' label="Username" InputLabelProps={{shrink: true}}/>
        <TextField id='password-input' variant='outlined' label="Password" InputLabelProps={{shrink: true}}/>
        <div className="login-btn-interactions">
          {/* <Button variant='contained' sx={{width: '300px', height: '65px'}} onClick={() => login(false)} >Login</Button>  */}
          {/* <Button onClick={() => login(true)} >Signup</Button> */}
          <button className="login-btn" onClick={() => login(false)}>Login</button>
          <button className="login-btn" onClick={() => login(true)}>Signup</button>
        </div>
      </div>
    </div>
  );
};
 
export default Login;