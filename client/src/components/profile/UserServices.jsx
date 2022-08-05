import React, {useState, useEffect} from 'react';
import SERVICES from './SERVICEDATA.js';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { TextField } from '@mui/material';
import axios from 'axios';

const iconStyle = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  top: '5px',
  left: '5px'
};

const UserServices = (props) => {
  const {user, username, fetchUser} = props;
  const [query, setQuery] = useState('');

  const userDoesNotHaveFilter = (dataSet) => {
    let result = [];
    dataSet.forEach(item => {
      if ((user.ownedServices || []).indexOf(item) === -1 && item.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        result.push(item);
      }
    });
    return result;
  };

  return (
    <div className="user-profile-services">
      <div className="user-profile-service-header">{(user.ownedServices || []).length > 0? 'Owned Services' : ''}</div>
      <ServiceCarousel 
        items={user.ownedServices} 
        name={'Owned Services'}
        FlipModal={OwnedServiceDetail}
        username={username}
        fetchUser={fetchUser}
      />

      <div className="user-profile-service-header">Unowned Services</div>
      <TextField 
        label="Search Services" 
        variant="standard" 
        sx={{width: '500px'}} 
        onKeyUp={e => setQuery(e.target.value)}
      />

      <ServiceCarousel 
        items={Object.keys(SERVICES)} 
        name={'Unowned Services'}
        FlipModal={UnownedServiceDetail}
        filter={userDoesNotHaveFilter}
        username={username}
        fetchUser={fetchUser}
      />

    </div>
  );
};

const OwnedServiceDetail = (props) => {
  const {render, service, username, fetchUser} = props;
  if (!render) return;

  const removeService = () => {
    axios({
      method: 'post',
      url: '/user/service',
      data: {
        username,
        itemName: 'ownedServices',
        newValue: service,
        add: false
      }
    })
    .then(fetchUser);
  };

  return (
    <div className="flip-modal owned-service-detail" onClick={() => removeService(service)}>
      <ClearIcon style={iconStyle}/>
    </div>
  );
};

const UnownedServiceDetail = (props) => {
  const {render, service, username, fetchUser} = props;
  if (!render) return;
  
  const addService = (service) => {
    axios({
      method: 'post',
      url: '/user/service',
      data: {
        username,
        itemName: 'ownedServices',
        newValue: service,
        add: true
      }
    })
    .then(fetchUser);
  };
  
  return (
    <div className="flip-modal unowned-service-detail" onClick={() => addService(service)}>
      <div className="user-service-price">
        {SERVICES[service].price}
      </div>
      <AddIcon sx={iconStyle}/>
    </div>
  );
};

const ServiceDisplayModal = (props) => {
  const {service, FlipModal, username, fetchUser} = props;   
  const [showServiceDetails, setShowServiceDetails] = useState(false);
  const showDetails = () => setShowServiceDetails(true);
  const hideDetails = () => setShowServiceDetails(false);

  return (
    <div className={`user-profile-service-item user-profile-service-item-${service}`}
      onMouseEnter={showDetails}
      onMouseLeave={hideDetails}
    >    
      <FlipModal render={showServiceDetails} service={service} username={username} fetchUser={fetchUser}/>
    </div>
  );
};

const ServiceCarousel = (props) => {
  let {items, name, FlipModal, filter, username, fetchUser} = props;
  items = items || [];
  let dataFilter = filter || function(item) {return item};
  if (items.length === 0) return;
    
  return (
    <div className="service-carousel">
      {dataFilter(items).map((service, i) => {
        <div className="user-profile-service-header">{name}</div>
        return (
          <ServiceDisplayModal 
            key={`service-carousel-${service}-${name}-${i}`} 
            service={service} 
            FlipModal={FlipModal}
            username={username}
            fetchUser={fetchUser}
          />
        )})}
    </div>
  );
};


export default UserServices;