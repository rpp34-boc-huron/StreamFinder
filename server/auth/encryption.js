const bcrypt = require('bcrypt');

module.exports.hash = async (text) => {
  let salt = await bcrypt.genSalt(10);
  let result = await bcrypt.hash(text, salt);
  return result;
};

module.exports.compare = async (text, hash) => {
  return (await bcrypt.compare(text, hash));
};