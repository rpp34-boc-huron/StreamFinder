import React, {useState, useEffect} from 'react';
import { TextField, Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';

const EditUserInfo = (props) => {
  const {toggleEditUser, editUser, user, setClient} = props;
  if (!editUser) return;
  
  const fadeOutModal = (data=null) => {
    let el = document.querySelector('.user-profile-edit-text');
    el.style.animation = '500ms ease riseAbove forwards';
    setTimeout(() => toggleEditUser(), 490);
    if (data !== null) setClient(data);
  }; 

  const editInfo = () => {
    const username = document.getElementById('edit-user-username').value;
    const aboutMe = document.getElementById('edit-user-about-me').value;

    axios({
      method: 'post',
      url: '/user/aboutMe',
      data: {
        username: user.username, 
        newUsername: username,
        aboutMe
      }
    })
    .then(() => fadeOutModal({username, aboutMe}))
    .catch(err => err);
  };
  

  return (
    <div className="overlay-blur">
      <div className="user-profile-edit-text">
        <TextField id="edit-user-username" label="Username" defaultValue={user.username} onClick={e => e.target.select()} fullWidth/>
        <TextField id="edit-user-about-me" label="About Me" defaultValue={user.aboutMe} onClick={e => e.target.select()} fullWidth multiline rows={4} sx={{height: '100px'}}/>
        <Button onClick={() => editInfo(fadeOutModal)} sx={{position: 'relative', width: 'max-content', padding: '0,0,0,0', left: '708px', top: '10px', '&:hover': {background: 'transparent'}}} disableRipple >
          <DoneIcon sx={{
            width: 25,
            height: 25,
            color: 'lightslategray',
            borderRadius: '100%'
          }} />
        </Button>
        
        <Button onClick={() => fadeOutModal()} sx={{position: 'absolute', width: 'max-content', padding: '0,0,0,0', left: '678px', bottom: '21px', '&:hover': {background: 'transparent'}}} disableRipple >
          <ClearIcon sx={{
            width: 25,
            height: 25,
            color: 'lightslategray',
            borderRadius: '100%'
          }} />
        </Button>
      </div>
    </div>
  );
};

export default EditUserInfo;