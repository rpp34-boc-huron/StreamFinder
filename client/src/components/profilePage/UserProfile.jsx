import React, {useState, useEffect} from 'react';

const UserProfile = (props) => {
  
  const [showChooseSubscriptionsModal, setShowChooseSubscriptionsModal] = useState(false);
  const [userData, setUserData] = useState({}); //pass friends to friends and {profilePic/ aboutMe} to userDetails

  const fetchUser = () => {
    let user = 'result from fetch';
    const {profileUrl, aboutMe} = user;
    setUserData({profileUrl, aboutMe});
  };

  const toggleChooseSubscriptionsModal = () => setShowChooseSubscriptionsModal(!showChooseSubscriptionsModal);

  return (
    <div className="user-profile-container">
      //@include User Information
      //@include User Friends List
    </div>
  );
};

export default UserProfile;