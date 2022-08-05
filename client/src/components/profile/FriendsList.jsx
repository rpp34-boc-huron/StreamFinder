import React, {useState, useEffect} from 'react';
import { TextField, Button } from '@mui/material';
import defaultProfilePic from './base64DefaultImg.js';

const UserFriends = (props) => {

    const [friends, setFriends] = useState([1,1,1]);

    return (
    <div className="user-profile-friends">
      <div className="user-profile-header">Friends</div>
      <TextField variant="standard" label="Search Friends" size="small" fullWidth/>
      <Button sx={{width: 'max-content', '&:hover': {background: 'transparent'}}} disableRipple >Add Friend</Button>
      <div className="user-profile-friends-list">
        {friends.map((friend, i) => {
          return <Friend name={friend}/>
        })}
      </div>
    </div>
  );
};

const Friend = (props) => {
  
  return (
    <div className="friend">
      <div className="friend-meta">
        <img width={65} height={65} id="friend-pic" src={defaultProfilePic} alt="" />
        <div className="friend-meta-username">@BRUH3BRUH3BRUH3</div>
      </div>
      <div className="friend-service-list">
        {/* map it here! */}
        {/* <div className="black-canvas">
          <div className="NETFLIX"></div>
        </div> */}
      </div>
    </div>
  )
};

export default UserFriends;