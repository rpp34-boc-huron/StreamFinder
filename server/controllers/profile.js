const { User } = require('../../database/index.js');

module.exports.saveProfilePicture = async (req, res) => {
  const { username, img } = req.body;  
  try {
    await User.update({username}, {profileUrl: img});
    res.end();
  } catch {
    res.status(500).end();
  }
};

module.exports.saveProfileData = async (req, res) => {
  const {username, newUsername, aboutMe} = req.body;

  try {
    await User.update({username}, {
      username: newUsername,
      aboutMe
    });
    res.end();
  } catch {
    res.status(500).end();
  }
};

module.exports.updatePofileArr = async (req, res) => {
  let {username, itemName, newValue, add} = req.body;
  if (add==='undefined') add = true;

  try {
    await User.updateArrayProp({username}, itemName, [newValue], add);
    res.end();
  } catch {
    res.status(500).end();
  }
};

module.exports.addFriend = async (req, res) => {
  const { username, friendName } = req.body;

  try {
    let users = await User.find({username});
    if (users.length > 0) {
      let user = users[0];
      await User.updateArrayProp({username}, 'friends', [friendName]);
      res.end();
    } else {
      res.status(500).end();
    }
  } catch {
    res.end(500).end();
  }
};

module.exports.getUserProfile = async(req, res) => {
  const { username } = req.body;
  let users = await User.find({username});
  if (users.length > 0) {
    let user = users[0];
    let {username, ownedServices, profileUrl, aboutMe, friends} = user;
    res.end(JSON.stringify({username, ownedServices, profileUrl, aboutMe, friends}));
  } else {
    res.status(500).end('User not found!');
  }
};

module.exports.resetPassword = async (req, res) => {
  // check for is the auth (user pass match session user)
  const {username, password} = req.body;
  
  try {
    await User.update({username}, {password});
    res.end();
  } catch {
    res.status(500).end();
  }
};

module.exports.getFriend = async(req, res) => {
  let { name } = req.params;
  
  let users = await User.find({username: name});
  if (users.length > 0) {
    let user = users[0];
    let {username, ownedServices, profileUrl} = user;
    res.end(JSON.stringify({username, ownedServices, profileUrl}));
  } else {
    res.status(500).end('User Not Found');
  }
};

module.exports.getQueriedFriends = async (req, res) => {
  let { query } = req.params;
  let result = [];

  //get * users
  // find those with name similar to query

  try {
    let users = await User.find({});
    users.forEach((user) => {
      let username = user.username;
      if (JSON.stringify(username).indexOf(query) !== -1) {
        result.push(username);
      }
    });

    res.end(JSON.stringify(result));
  } catch {
    res.status(500).end('Internal Error');
  }
};