import React, { useState } from 'react';
import { TextField, Button, InputLabelProps } from '@mui/material';
import axios from 'axios';

const Account = (props) => {
  const {user} = props;
  const [passwordReset, setPasswordReset] = useState(false);
  const [btnText, setBtnText] = useState('Reset Password');

  const resetPassword = () => {
    const el = document.getElementById('profile-password-input');
    if (passwordReset) {
      // want to save 

      if (el.value.length >= 6) {
        axios({
          method: 'post',
          url: '/user/password/reset',
          data: {
            password: el.value
          }
        })
        .then(() => {
          el.disabled = true;
          el.value = 'LOLIWOULDNTSTOREITHERE.!';
          setPasswordReset(!passwordReset);
          setBtnText('Reset Password');
        })
        .catch(err => err);
      }
    } else {
      el.disabled = false;
      el.focus();
      el.value="";
      setBtnText('Save Password');
      setPasswordReset(!passwordReset);
    }
    
  };

  return (
    <div className="user-profile-security">
      <div className="user-profile-security-text">Account</div>
      
      <TextField 
        value={user.username} 
        label="Username" 
        fullWidth
        size="small"
        disabled
        InputLabelProps={{
          shrink: true,
        }}
      />
        
      <TextField defaultValue={'LOLIWOULDNTSTOREITHERE.!'} 
        label="Password"
        type="password" 
        fullWidth
        size="small"
        disabled
        id='profile-password-input'
      />

      <Button sx={{
        width: 'max-content',
        justifyContent: 'left',
        height: 'max-content',
        position: 'relative',
        top: '-5px',
        padding: '5px 0 5px',
        color: 'lightskyblue'
      }}
      disableRipple
      onClick={resetPassword}
      >
        {btnText}
      </Button>
    </div>
  );
};

export default Account;