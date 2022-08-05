import React, {useState, useEffect, useRef} from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from '@mui/material';
import EditUserInfo from './EditUserInfo.jsx';
import axios from 'axios';
var defaultPfp = require('./base64DefaultImg.js');

const AboutMe = (props) => {

  const username = 'sase'; // later come from props;
  const imgDiv = useRef();
  const [user, setUser] = useState({});

  const fetchUser = () => {
    axios.get(`/user/profile/${username}`)
    .then(res => setUser(res.data))
    .catch(err => err);    //
  };

  useEffect(fetchUser, []);


  const openFilePicker = () => {
    document.querySelector('#open-file').click();
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
      <EditUserInfo toggleEditUser={toggleEditUser} editUser={editUser}/>
      
      <div className="user-profile-edit-bio">
        <Button onClick={toggleEditUser} >Edit</Button>
      </div>
      
      <div className="user-profile-user-meta-image-container">
        <div ref={imgDiv} className="replace-this-image">
          <img src={user.profileUrl || defaultPfp} width="175px" height="175px" alt="" style={{
            borderRadius: '100%'
          }}/>
        </div>
          <input type="file" id="open-file" style={{display: 'none'}} onChange={imgToBase64}/>
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