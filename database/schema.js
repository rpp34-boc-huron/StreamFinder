const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String, autoIndexing: true, unique: true},
  password: {type: String, autoIndexing: true},
  ownedServices: Array,
  friends: Array,
  favorites: Array,
  watchList: Array,
  profileUrl: String,
  aboutMe: String,
});

const User = new mongoose.model('user', userSchema);

module.exports = {
  User,
};