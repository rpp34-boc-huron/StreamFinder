import React, {useState, useEffect} from 'react';
import { TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

var mockServices = {
  Netflix: {
    price: '$12.99/m',
    className: 'user-subscription-netflix',
  },
  Hulu: {
    price: '$14.99/m',
    className: 'user-subscription-hulu',
  },
  HBO: {
    price: '$6.99/m',
    className: 'user-subscription-hbo',
  }
};

const UserSettings = (props) => {


    const [ownedSubscriptions, setOwnedSubscriptions] = useState([]);
    const [allServices, setAllServices] = useState(['Netflix', 'Hulu', 'HBO']);
    const [searchedService, setSearchedService] = useState(allServices);

    const handleServiceSearch = (e) => {
      let query = e.target.value;
      let result = [];
      allServices.forEach(service => {
        if (service.toLowerCase().indexOf(query.toLowerCase()) !== -1) result.push(service);
      });
      setSearchedService(result);
    };

    const addService = (service) => {
      let services = [...ownedSubscriptions];
      services.push(service);
      setOwnedSubscriptions(services);
    };

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
        {ownedSubscriptions.map((serviceName, i) => {
          return <UnOwnedServices key={`owned-service-${i}`} name={serviceName}/>
        })}
        <NoSubscriptionsText ownedSubscriptions={ownedSubscriptions}/>
      </div>

      <div className="user-profile-add-subscriptions-text">Add a Supported Service</div>
      <TextField variant="standard" sx={{width: '500px'}} label="Search Services" size="small" fullWidth onKeyUp={handleServiceSearch}/>
      <div className="user-profile-add-subscriptions-carousel">
        {searchedService.map((serviceName, i) => {
          if (ownedSubscriptions.indexOf(serviceName) === -1) {
            return <UnOwnedServices key={`unowned-service-${i}`} name={serviceName} addService={addService}/>
          }
        })}
      </div>

    </div>
  );
};

const NoSubscriptionsText = (props) => {
  if(props.ownedSubscriptions.length > 0) return;

  return (
    <div className="profile-you-have-no-subscriptions-text">
      You Have No Services Added
    </div>
  );
};

const UnOwnedServices = (props) => {
  const {name, addService} = props;
  const [renderMore, setRenderMore] = useState(false);

  return (
    <div className='user-profile-service' onMouseEnter={() => setRenderMore(true)} onMouseLeave={() => setRenderMore(false)}>
      <div className="base-black"></div>
      <div className={`${mockServices[name].className}`}></div>
      <MoreServiceInfo render={renderMore} name={name} addService={addService}/>
    </div>
  );
};

const MoreServiceInfo = (props) => {
  let {name, render, addService} = props;
  if (!render) return;

  return (
    <div className="more-info-on-service" onClick={() => addService(name)}>
      <div className="more-info-on-service-price">
        {mockServices[name].price}
      </div>
      <AddIcon sx={{color: 'grey', width: '50px', height: '50px', position: 'absolute', top: '12.5px', left: '12.5px'}}/>
    </div>
  );
};

export default UserSettings;