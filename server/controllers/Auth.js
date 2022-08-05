const {User} = require('../../database/index');


exports.register = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (typeof(username) == 'undefined') {
      return res.status(400).json({ message: "Please enter a username" })
    }
    if (typeof(password) == 'undefined' || password.length < 6) {
      return res.status(400).json({ message: "Password less than 6 characters" })
    }
    try {
      const checkUser = await User.find({ username});
      if (checkUser.length > 0) {
        return res.status(401).json({
          message: "Username already exists",
          error: "Username must be unique"
        })
      } else {
        try {
          await User.create({
            username,
            password,
          }).then(user => {
            if (typeof(user) == 'undefined') {
            res.status(401).json({
              message: 'Username already exists',
            })
            } else {
              res.status(200).json({
                message: "User successfully created",
                user,
              })
            }
           }
          )
        } catch (err) {
          res.status(401).json({
            message: "User not successful created",
          })
        }
      }
    } catch (err) {
      res.status(401).json({
        message: "User not successful created",
      })
    }
  }

  exports.login = async (req, res) => {
    const { username, password } = req.body
    // Check if username and password is provided
    if (!username || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }
    try {
        const user = await User.find({ username, password });
        const userData = user;
        delete userData.password;
        if (user.length === 0) {
          res.status(401).json({
            message: "Login not successful",
            error: "User not found"
          })
        } else {
          res.status(200).json({
            message: "Login successful",
            userData,
            token: 'test123'
          })
        }
      } catch (error) {
        res.status(400).json({
          message: "An error occurred",
          error: error.message,
        })
      }
    }