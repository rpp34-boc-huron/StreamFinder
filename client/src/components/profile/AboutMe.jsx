import React, {useState, useEffect, useRef} from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from '@mui/material';
import EditUserInfo from './EditUserInfo.jsx';
import axios from 'axios';
var defaultPfp = require('./base64DefaultImg.js');
import EditIcon from '@mui/icons-material/Edit';

const AboutMe = (props) => {
  const imgDiv = useRef();
  const { fetchUser, username } = props;
  let [user, setUser] = useState(props.user || user);
  user = props.user;

  const openFilePicker = () => {
    document.querySelector('#open-file').click();
  };

  const setClient = (data) => {
    user.username = data.username;
    user.aboutMe = data.aboutMe;
    setUser({...user});
  };

  const imgToBase64 = (e) => {
    if (e.target.files.length > 0) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let base64 = reader.result;
        axios({
          method: 'post',
          url: '/user/profileUrl',
          data: {
            username,
            img: base64
          }
        })
        .then(() => fetchUser())
        .catch((err) => console.log(err));
      };
    }
  };

  const [editUser, setEditUser] = useState(false);
  const toggleEditUser = () => setEditUser(!editUser);

    return (
    <div className="user-profile-user-meta-information">
      <EditUserInfo user={user} toggleEditUser={toggleEditUser} editUser={editUser} setClient={setClient}/>
      
      <div className="user-profile-user-meta-image-container">
        <div ref={imgDiv} className="replace-this-image">
          <img id="img" src={user.profileUrl || defaultPfp} width="175px" height="175px" alt="" style={{
            borderRadius: '100%'
          }}/>
        </div>
          <input type="file" id="open-file" style={{display: 'none'}} onChange={imgToBase64}/>
        <div 
          className="replace-profile-image-button" 
          onClick={openFilePicker}>
          <CameraAltIcon 
            sx={{width: '35px', 
              height: '35px', 
              background: 'lightgrey', 
              position: 'relative', 
              borderRadius: '100%', 
              padding: '5px',
              left: '15px'
            }}
          />
        </div>
      </div>
      
      <div className="user-profile-user-meta-about-me-container">
        <div className="user-profile-username-text">{user.username}</div>
        <div className="user-profile-about-me-text">{user.aboutMe}</div>
        <div className="user-profile-edit-bio">
        <Button onClick={toggleEditUser} sx={{width: 30, height: 30, minWidth: 0}}>
          <EditIcon
            sx={{
              width: 30,
              height: 30,
              color: 'lightslategray'
            }}
          />
        </Button>
      </div>
      </div>
    </div>
  );
};

export default AboutMe;