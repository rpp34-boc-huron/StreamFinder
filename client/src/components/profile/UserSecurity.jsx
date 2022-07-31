import React from 'react';
import { TextField, Button } from '@mui/material';

const Account = (props) => {
  const {user} = props;

  return (
    <div className="user-profile-security">
      <div className="user-profile-security-text">Account</div>
      
      <TextField 
        defaultValue={user.username} 
        label="Username" 
        fullWidth
        size="small"
        disabled
      />
        
      <TextField defaultValue={user.password} 
        label="Password"
        type="password" 
        fullWidth
        size="small"
        disabled
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
      >
        Reset Password
      </Button>
    </div>
  );
};

export default Account;