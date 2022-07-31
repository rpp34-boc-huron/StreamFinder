import React, {useState, useEffect} from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from '@mui/material';
import EditUserInfo from './EditUserInfo.jsx';

const AboutMe = (props) => {

  const {user} = props;

  const openFilePicker = () => {
    document.querySelector('#open-file').click();
  };

  const [editUser, setEditUser] = useState(false);
  const toggleEditUser = () => setEditUser(!editUser);

    return (
    <div className="user-profile-user-meta-information">
      <EditUserInfo toggleEditUser={toggleEditUser} editUser={editUser}/>
      
      <div className="user-profile-edit-bio">
        <input type="file" id="open-file" style={{display: 'none'}}/>
        <Button onClick={toggleEditUser} >Edit</Button>
      </div>
      
      <div className="user-profile-user-meta-image-container">
        <div className="replace-this-image"></div>
        <div 
          className="replace-profile-image-button" 
          onClick={openFilePicker}>
          <CameraAltIcon 
            sx={{width: '50px', 
              height: '50px', 
              background: 'lightgrey', 
              position: 'relative', 
              borderRadius: '100%', 
              padding: '5px'
            }}
          />
        </div>
      </div>
      
      <div className="user-profile-user-meta-about-me-container">
        <div className="user-profile-username-text">{user.username}</div>
        <div className="user-profile-about-me-text">{user.aboutMe}</div>
      </div>
    </div>
  );
};

export default AboutMe;