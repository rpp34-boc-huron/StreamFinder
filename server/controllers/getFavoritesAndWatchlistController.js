const db = require('../../database/index.js');

const getUserData = async (username, data) => {
  const user = await db.User.find({'username': username})
  console.log('favorites data', user[0][data]);
  return user[0][data];
};

module.exports = { getUserData } ;