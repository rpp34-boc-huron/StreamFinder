import React, {useState, useEffect} from 'react';
import { TextField, Button } from '@mui/material';

const UserSettings = (props) => {

    const [ownedSubscriptions, setOwnedSubscriptions] = useState([""]);
    const [allServices, setAllServices] = useState([]);

    return (
    <div className="user-profile-settings">
      <div className="user-profile-account-text">Account</div>
      <div className="user-profile-username-settings">
        <TextField value={'aUserName'} disabled variant="outlined" label="Username" size="small" fullWidth/>
        <Button>Edit</Button>
      </div>

      <div className="user-profile-password-settings">
        <TextField value={'aUserName'} type="password" disabled variant="outlined" label="Password" size="small" fullWidth/>
        <Button>Edit</Button>
      </div>

      <Button sx={{width: 'max-content'}}>Reset Password</Button>

      <div className="user-profile-owned-subscriptions-text">Owned Subscriptions</div>
      <div className="user-profile-owned-subscriptions-carousel">
        <NoSubscriptionsText render={ownedSubscriptions.length >= 0}/>
      </div>

      <div className="user-profile-add-subscriptions-text">Add a Supported Service</div>
      <TextField variant="standard" sx={{width: '500px'}} label="Search Services" size="small" fullWidth/>
      <div className="user-profile-add-subscriptions-carousel"></div>

    </div>
  );
};

const NoSubscriptionsText = (props) => {
  if(!props.render) return;

  return (
    <div className="profile-you-have-no-subscriptions-text">
      You Have No Services Added
    </div>
  );
};

export default UserSettings;