import React, { useEffect } from 'react';
import { TextField, Button } from "@material-ui/core";
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
    <div className="login">
      <TextField id='username-input' label="Username" />
      <TextField id='password-input' label="Password" />
      <Button onClick={() => login(false)} >Login</Button>
      <Button onClick={() => login(true)} >Signup</Button>
    </div>
  );
};

export default Login;