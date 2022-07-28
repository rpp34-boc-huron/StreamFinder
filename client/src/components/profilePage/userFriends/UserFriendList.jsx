import React, {useState, useEffect} from 'react';

const UserFriendList = (props) => {
  
  const [friends, setFriends] = useState([]);
  const [displayedFriends, setDisplayedFriends] = useState(friends);
  
  const filterByQuery = (query, dataset) => {
    let result = [];
    dataset.forEach((item) => {
      if (JSON.stringify(item).indexOf(query) !== -1) {
        result.push(item);
      }
    });
    return result;
  };

  const fetchFriends = (filter) => {
    //fetch
    let results = 'fetch for ...';
    return filter(results);
  };

  return (
    <div className="user-profile-friends-list">
      {friends.map((friend, i) => {
        return <div key={`user-profile-friend-${i}`} className="user-profile-friend">
          //A Friend
        </div>
      })}
    </div>
  );
};

export default UserFriendList;