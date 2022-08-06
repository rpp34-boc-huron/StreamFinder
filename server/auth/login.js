const encrypt = require('./encryption.js');
const { User } = require('../../database/index.js');
const session = require('./session.js');

module.exports.login = async(req, res) => {
  const {username, password} = req.body;
  const { sessionId } = req.cookies;

  console.log({username, sessionId});
  if ((username === undefined || username === '') && sessionId !== undefined) {
    // login with sesh

    let seshData = session.data[sessionId];
    if (seshData !== undefined) {
      let users = await User.find(seshData);
      if (users.length > 0) {
        let user = users[0];
        res.end(user.username);
        return;   
      }
    }
    
    res.status(401).end();
  } else if (username !== undefined) {
    // login with username
    console.log('loggin in without sesh');
    let users = await User.find({username});
    if (users.length > 0) {
      let user = users[0];

      if (await encrypt.compare(password, user.password)) {
        let sessionId = await session.insert({
          username: user.username,
          password: user.password
        });
        res.cookie('sessionId', sessionId, { maxAge: 900000, httpOnly: true });
        res.end(user.username);
      } else {
        res.status(401).end();
      }

    } else {
      res.status(400).end('User Not Found');
    }
  }
};

module.exports.signup = async(req, res) => {
  const { username, password } = req.body;
  let hashedPass = await encrypt.hash(password);

  let note = await User.create({
    username,
    password: hashedPass,
    ownedServices: [],
    friends: [],
    favorites: [],
    watchList: [],
    profileUrl: '',
    aboutMe: '',
  });

  if (note === true) {
    let sessionId = await session.insert({
      username,
      password: hashedPass
    });
    res.cookie('sessionId', sessionId, { maxAge: 900000, httpOnly: true });
    res.end(username);
  } else {
    res.status(500).end(note);
  }
};

module.exports.signout = (req, res) => {
  let { sessionId } = req.cookies;
  session.remove(sessionId);
  res.end();
};

module.exports.auth = async(req, res, next) => {
  let { sessionId } = req.cookies;

  let sesh = session.data[sessionId];
  if (sesh !== undefined) {

    let users = await User.find({password: sesh.password});
    if (users.length > 0) {
      let user = users[0];
      req.body.username = user.username;
      next();
      return;
    }
  }
  
  res.status(401).end();
};   

module.exports.updateSession = async(req, res, next) => {
  let {sessionId} = req.cookies;
  let sesh = session.data[sessionId];
  if (sesh === undefined) {
    res.status(401).end();
    return;
  }

  let users = await User.find({password: sesh.password});

  if (users.length > 0) {
    let user = users[0];
    session.data[sessionId] = {
      username: user.username,
      password: user.password,
    }

    next();
    return;
  }

  res.status(401).end();
};