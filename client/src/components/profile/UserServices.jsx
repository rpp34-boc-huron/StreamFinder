import React, {useState, useEffect} from 'react';
import SERVICES from './SERVICEDATA.js';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

const iconStyle = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  top: '5px',
  left: '5px'
};

const UserServices = (props) => {
  const {user} = props;

  return (
    <div className="user-profile-services">
      <div className="user-profile-service-header">Owned Services</div>
      
      <ServiceCarousel 
        items={user.ownedServices} 
        name={'Owned Services'}
        FlipModal={OwnedServiceDetail}
      />

      <div className="user-profile-service-header">Unowned Services</div>
      <ServiceCarousel 
        items={Object.keys(SERVICES)} 
        name={'Unowned Services'}
        FlipModal={UnownedServiceDetail}
      />

    </div>
  );
};

const OwnedServiceDetail = (props) => {
  const {render} = props;
  if (!render) return;

  return (
    <div className="flip-modal owned-service-detail">
      <ClearIcon style={iconStyle}/>
    </div>
  );
};

const UnownedServiceDetail = (props) => {
  const {render, service} = props;
  if (!render) return;
  
  return (
    <div className="flip-modal unowned-service-detail">
      <div className="user-service-price">
        {SERVICES[service].price}
      </div>
      <AddIcon sx={iconStyle}/>
    </div>
  );
};

const ServiceDisplayModal = (props) => {
  const {service, FlipModal} = props;   
  const [showServiceDetails, setShowServiceDetails] = useState(false);
  const showDetails = () => setShowServiceDetails(true);
  const hideDetails = () => setShowServiceDetails(false);

  return (
    <div className={`user-profile-service-item user-profile-service-item-${service}`}
      onMouseEnter={showDetails}
      onMouseLeave={hideDetails}
    >    
      <FlipModal render={showServiceDetails} service={service}/>
    </div>
  );
};

const ServiceCarousel = (props) => {
  const {items, name, FlipModal} = props;
    
  return (
    <div className="service-carousel">
      {items.map((service, i) => {
        return (
          <ServiceDisplayModal 
            key={`service-carousel-${service}-${name}-${i}`} 
            service={service} 
            FlipModal={FlipModal}
          />
        )})}
    </div>
  );
};


export default UserServices;