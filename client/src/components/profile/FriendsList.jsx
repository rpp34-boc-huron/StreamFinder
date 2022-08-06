import React, {useState, useEffect} from 'react';
import { TextField, Button } from '@mui/material';
import defaultProfilePic from './base64DefaultImg.js';
import axios from 'axios';

const UserFriends = (props) => {
    const { user , fetchUser} = props;
    const [query, setQuery] = useState('');
    const [useLocalMode, setUseLocalMode] = useState(true);

    useEffect(() => {
      let el = document.getElementById('user-profile-search');
      if (useLocalMode) {
        el.focus();
        el.select();
      }
    }, [useLocalMode]);


    return (
    <div className="user-profile-friends">
      <div className="user-profile-header">Friends</div>
      <TextField id="user-profile-search" onKeyUp={(e) => setQuery(e.target.value)} variant="standard" label="Search Friends" size="small" fullWidth/>
      {/* <Button onClick={() => useLocalMode(true)} sx={{width: 'max-content', '&:hover': {background: 'transparent'}}} disableRipple >Add Friend</Button> */}
      <div className="user-profile-friends-list">
        {(user.friends || []).map((friend, i) => {
          return <Friend useLocalMode={useLocalMode} query={query} key={`user-friend-${i}`} name={friend}/>
        })}
      </div>
    </div>
  );
};

const Friend = (props) => {
  const { name, query, useLocalMode } = props;
  if (name.indexOf(query) === -1 && useLocalMode) return;
  const [friend, setFriend] = useState({});
  const [displayFriend, setDisplayFriend] = useState([]);

  useEffect(() => {
    axios.post(`/friend/${name}`)
    .then((res) => {
      setFriend(res.data);
    })
    .catch((err) => err);
  }, []);
  
  return (
    <div className="friend">
      <div className="friend-meta">
        <img width={65} height={65} id="friend-pic" src={friend.profileUrl || defaultProfilePic} alt="" />
        <div className="friend-meta-username">{friend.username}</div>
      </div>
      <div className="friend-service-list">
        {(friend.ownedServices || []).slice(0,3).map((service, i) => {
          return (
            <div key={`friend-list-item-${i}`} className="black-canvas">
              <div className={service.toUpperCase()}></div>
            </div> 
        );
        })}
      </div>
    </div>
  );
};

export default UserFriends;