import React, {useState, useEffect} from 'react';
import AboutMe from './AboutMe.jsx';
import AccountSettings from './AccountSettings.jsx';
import FriendsList from './FriendsList.jsx';

const UserProfile = (props) => {

    //

    return (
    <div className="user-profile">
      <div className="user-information-container">
        <AboutMe />
        <AccountSettings />
      </div>

      <div className="user-friends-list-container">
        <FriendsList />
      </div>
    </div>
  );
};

export default UserProfile;