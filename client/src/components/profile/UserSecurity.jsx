import React, { useState } from 'react';
import { TextField, Button, InputLabelProps } from '@mui/material';

const Account = (props) => {
  const {user} = props;
  const [passwordReset, setPasswordReset] = useState(false);
  const [btnText, setBtnText] = useState('Reset Password');

  const resetPassword = () => {
    const el = document.getElementById('profile-password-input');
    if (passwordReset) {
      // want to save 

      //After Effect
      el.disabled = true;
      el.value = 'LOLIWOULDNTSTOREITHERE.!';
      setPasswordReset(!passwordReset);
      setBtnText('Reset Password');
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
        padding: '5px 0 5px'
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