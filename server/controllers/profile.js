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

module.exports.addFriend = async (username, friendName) => {
  try {
    let users = User.find({username});
    if (users.length > 0) {
      let user = users[0];
      await User.updateArrayProp({username}, 'friends', [friendName]);
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

module.exports.getUserProfile = async(req, res) => {
  const { username } = req.body;
  let users = await User.find({username});
  if (users.length > 0) {
    let user = users[0];
    let {username, ownedServices, profileUrl, aboutMe} = user;
    res.end(JSON.stringify({username, ownedServices, profileUrl, aboutMe}));
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