import React, {useState, useEffect} from 'react';
import { TextField, Button } from '@mui/material';

const UserFriends = (props) => {

    //

    return (
    <div className="user-profile-friends">
      <div className="user-profile-header">Friends</div>
      <TextField variant="standard" label="Search Friends" size="small" fullWidth/>
      <Button sx={{width: 'max-content'}}>Add Friend</Button>
      <div className="user-profile-friends-list"></div>
    </div>
  );
};

export default UserFriends;