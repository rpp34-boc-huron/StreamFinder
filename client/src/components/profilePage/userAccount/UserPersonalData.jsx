import React, {useState, useEffect} from 'react';

const UserPersonalData = (props) => {
  
  const profileUrl = props.user.profileUrl;
  const aboutMe = props.user.aboutMe;
  const userData = {profileUrl, aboutMe};

  return (
    <div className="user-profile-container">
      //@include User Information
      //@include User Friends List
    </div>
  );
};

export default UserPersonalData;