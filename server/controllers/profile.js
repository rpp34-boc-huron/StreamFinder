const { User } = require('../../database/index.js');

module.exports.saveProfilePicture = async (username, pfpBase64) => {
  try {
    await User.update({username}, {profileUrl: pfpBase64});
    return true;
  } catch {
    return false;
  }
};

module.exports.saveProfileData = async (username, newUsername, aboutMe) => {
  try {
    await User.update({username}, {
      username: newUsername,
      aboutMe
    });
    return true;
  } catch {
    return false;
  }
};

module.exports.updatePofileArr = async (username, serviceName, newValue, add=true) => {
  try {
    await User.updateArrayProp({username}, serviceName, [newValue], add);
    return true;
  } catch {
    return false;
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