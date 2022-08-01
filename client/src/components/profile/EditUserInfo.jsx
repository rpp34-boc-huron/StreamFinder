import React, {useState, useEffect} from 'react';
import { TextField, Button } from '@mui/material';

const EditUserInfo = (props) => {
  const {toggleEditUser, editUser} = props;
  if (!editUser) return;
  

  return (
    <div className="user-profile-edit-text">
      <TextField label="Username" fullWidth/>
      <TextField label="About Me" fullWidth multiline rows={4} sx={{height: '100px'}}/>
      <Button onClick={toggleEditUser} sx={{width: '50px', height: '50px', position:'absolute', bottom: '5px', right: '5px'}}>Save</Button>
    </div>
  );
};

export default EditUserInfo;