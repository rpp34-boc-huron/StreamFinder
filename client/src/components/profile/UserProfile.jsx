import React, {useState, useEffect} from 'react';
import AboutMe from './AboutMe.jsx';
import AccountSettings from './AccountSettings.jsx';
import FriendsList from './FriendsList.jsx';

var mockUser = {
  username: 'Sase',
  password: 'johnFKenedyTheGoat#imAnImmigrant',
  profileUrl: '',
  aboutMe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem suscipit voluptatem sed quaerat dolore dolorem, nesciunt quis fugit odio illum placeat quos? Debitis, laudantium aperiam veritatis facere beatae aliquid officia, veniam distinctio aspernatur mollitia eaque ab laboriosam eveniet quidem molestias autem, ducimus at quas reprehenderit error nemo quibusdam assumenda! Voluptates molestias ab soluta error fugiat. Libero dolore aliquam ratione eveniet rem cum? Omnis inventore eligendi minus amet dolore eaque qui ullam, nobis dolores? Dicta!',
  ownedServices: ['Netflix'],
  favorites: [],
  watchList: [],
  friends: ['Josh']
};

const UserProfile = (props) => {

  const [user, setUser] = useState(mockUser);
  // User should be passed down...

  return (
    <div className="user-profile">
      <div className="user-information-container">
        <AboutMe user={user}/>
        <AccountSettings />
      </div>

      <div className="user-friends-list-container">
        <FriendsList />
      </div>
    </div>
  );
};

export default UserProfile;