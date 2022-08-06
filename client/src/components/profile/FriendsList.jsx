import React, {useState, useEffect} from 'react';
import { TextField, Button } from '@mui/material';
import defaultProfilePic from './base64DefaultImg.js';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';

const UserFriends = (props) => {
    const { user , fetchUser} = props;
    const [query, setQuery] = useState('');
    const [useLocalMode, setUseLocalMode] = useState(true);
    const [friends, setFriends] = useState(user.friends || []);

    useEffect(() => {
      let el = document.getElementById('user-profile-search');
      if (useLocalMode) {
        el.focus();
        el.select();
      }
    }, [useLocalMode]);

    useEffect(() => setFriends(user.friends || []), [user]);

    const getFriends = () => {
      if (query === '') return;
      setUseLocalMode(false);
      axios({
        method: 'post',
        url: `/friends/${query}`,
      })
      .then((res) => {
        console.log('friends: ', res.data);
        setFriends(res.data);
      })
      .catch((err) => err);
    };

    const resetToLocalMode = (e) => {
      setQuery(e.target.value);
      if (e.target.value === '' && !useLocalMode) {
        setUseLocalMode(true);
        setFriends(user.friends || []);
      }
    };

    
    return (
    <div className="user-profile-friends">
      <div className="user-profile-header">Friends</div>
      <TextField onKeyUp={resetToLocalMode} id="user-profile-search" variant="standard" label="Search Friends" size="small" fullWidth/>
      <Button onClick={getFriends} sx={{width: 'max-content', '&:hover': {background: 'transparent'}}} disableRipple >Search Users</Button>
      <div className="user-profile-friends-list">
        {friends.map((friend, i) => {
          return <Friend fetchUser={fetchUser} setFriends setUseLocalMode={setUseLocalMode} useLocalMode={useLocalMode} query={query} key={`user-friend-${i}`} name={friend}/>
        })}
      </div>
    </div>
  );
};

const Friend = (props) => {
  const { name, query, useLocalMode, setUseLocalMode, fetchUser } = props;
  if (name.indexOf(query) === -1) return;
  const [friend, setFriend] = useState({});
  const [displayFriend, setDisplayFriend] = useState([]);

  useEffect(() => {
    axios.post(`/friend/${name}`)
    .then((res) => {
      setFriend(res.data);
    })
    .catch((err) => err);
  }, []);

  const addFriends = () => {
    axios({
     method: 'post',
     url: '/user/friends',
     data: {
       friendName: name
     }
    })
    .then(() => {
      setUseLocalMode(true);
      fetchUser();
    })
    .catch((err) => console.log({err}))
  };
  
  return (
    <div className="friend">
      <div className="friend-meta">
        <img width={65} height={65} id="friend-pic" src={friend.profileUrl || defaultProfilePic} alt="" />
        <div className="friend-meta-username">{friend.username}</div>
      </div>
      <div className="friend-service-list">
        {
        
        useLocalMode?

        (friend.ownedServices || []).slice(0,3).map((service, i) => {
          return (
            <div key={`friend-list-item-${i}`} className="black-canvas">
              <div className={service.toUpperCase()}></div>
            </div> 
        );
        })

        :

        <div className='friend-add-button' onClick={addFriends}>
          <AddIcon sx={{fontSize: '40px', color: 'lightgray'}} />
        </div>
        
        }
      </div>
    </div>
  );
};

export default UserFriends;