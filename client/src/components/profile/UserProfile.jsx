import React, {useState, useEffect} from 'react';
import AboutMe from './AboutMe.jsx';
import FriendsList from './FriendsList.jsx';
import Account from './UserSecurity.jsx';
import UserServices from './UserServices.jsx';
import axios from 'axios';

const UserProfile = (props) => {
  const [user, setUser] = useState({});

  const username = 'sase'; //for NOW

  const fetchUser = () => {
    axios.get(`/user/profile/${username}`)
    .then(res => setUser(res.data))
    .catch(err => err);    //
  };

  useEffect(fetchUser, []);

  return (
    <div className="user-profile">
      <div className="user-information-container">
        <AboutMe user={user} fetchUser={fetchUser} username={username}/>
        <Account user={user} fetchUser={fetchUser}/>
        <UserServices user={user} fetchUser={fetchUser} username={username}/>
      </div>

      <div className="user-friends-list-container">
        <FriendsList user={user} fetchUser={fetchUser}/>
      </div>
    </div>
  );
};

export default UserProfile;