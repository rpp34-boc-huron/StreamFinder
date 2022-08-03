const db = require('../../database/index.js');

const getUserData = async (username, data) => {
  const user = await db.User.find({'username': username})
  return user[0][data];
};

module.exports = { getUserData } ;