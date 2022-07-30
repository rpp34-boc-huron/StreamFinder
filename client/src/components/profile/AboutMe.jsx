import React, {useState, useEffect} from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Button } from '@mui/material';
import EditUserInfo from './EditUserInfo.jsx';

const AboutMe = (props) => {

  // const {user} = props;
  const user = {};
  const fakeUser = {
    name: 'Georgeus',
    pfUrl: '/www.google.com/images/bruh',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, nemo commodi nisi quos sit minus voluptate odio laboriosam harum deleniti velit aperiam perferendis sequi distinctio, quaerat voluptas aspernatur odit suscipit in tempora ut adipisci? Hic velit, modi inventore labore laboriosam cum tenetur fugiat provident incidunt ipsum doloribus iusto, non ut suscipit itaque rerum iste ad esse. Eos libero non vel quidem illum iste, quod voluptas mollitia consequatur deleniti voluptates, dolore voluptatibus explicabo omnis illo accusantium.'
  };

  const openFilePicker = () => {
    document.querySelector('#open-file').click();
  };

  const [editUser, setEditUser] = useState(false);
  const toggleEditUser = () => setEditUser(!editUser);

    return (
    <div className="user-profile-user-meta-information">
      <input type="file" id="open-file" style={{display: 'none'}}/>
      <div className="user-profile-edit-bio"><Button onClick={toggleEditUser} >Edit</Button></div>
      <EditUserInfo toggleEditUser={toggleEditUser} editUser={editUser}/>
      <div className="user-profile-user-meta-image-container">
        <div className="replace-this-image"></div>
        <div className="replace-profile-image-button" onClick={openFilePicker}><CameraAltIcon sx={{width: '50px', height: '50px', background: 'lightgrey', position: 'relative', left: '25px', borderRadius: '100%', padding: '5px'}}/></div>
      </div>
      <div className="user-profile-user-meta-about-me-container">
        <div className="user-profile-username-text">{user.name || fakeUser.name}</div>
        <div className="user-profile-about-me-text">{user.bio || fakeUser.bio}</div>
      </div>
    </div>
  );
};

export default AboutMe;