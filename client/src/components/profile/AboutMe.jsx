import React, {useState, useEffect} from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from '@mui/material';

const AboutMe = (props) => {

  // const {user} = props;
  const user = {};
  const fakeUser = {
    name: 'Georgeus',
    pfUrl: '/www.google.com/images/bruh',
    bio: `I am a really nice guy from the region of 
     Texas and I really enjoy watching movies with
     my friends and family. I watch movies all day and 
     all night in my parents 1 bedroom apartment, I also
     pay no rent have live for free.`
  };

    return (
    <div className="user-profile-user-meta-information">
      <div className="user-profile-edit-bio"><Button>Edit</Button></div>
      <div className="user-profile-user-meta-image-container">
        <div className="replace-this-image"></div>
        <div className="replace-profile-image-button"><CameraAltIcon sx={{width: '50px', height: '50px', background: 'lightgrey', position: 'relative', left: '25px', borderRadius: '100%', padding: '5px'}}/></div>
      </div>
      <div className="user-profile-user-meta-about-me-container">
        <div className="user-profile-username-text">{user.name || fakeUser.name}</div>
        <div className="user-profile-about-me-text">{user.bio || fakeUser.bio}</div>
      </div>
    </div>
  );
};

export default AboutMe;