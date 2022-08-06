const mongoose = require('mongoose');
const username = process.env.MONGOUSER;
const password = process.env.MONGOPASS;
const { USER } = require('./schema.js');

console.log(username,password)
mongoose.connect(`mongodb+srv://${username}:${password}@streamfinder01.5jdg2kb.mongodb.net/?retryWrites=true&w=majority`, (err) => {
  if (err) {
    console.log('Could not connect to MongoDB', err);
  } else {
    console.log('Connected to MongoDB');
  }
});

const User = {
  find: async (findBy={}) => {
    // Example findBy {username: "sase"}
    try {
      const results = await USER.find(findBy);
      return results;
    } catch {
      return "Err Finding User";
    }
  },

  create: async (userData) => {
    // Make sure userData matches Schema
    try {
      let users = await User.find({username: userData.username});
      if (users.length > 0) {
        return "Err Username Taken";
      }
      let doc = new USER(userData);
      try {
        await doc.save();
        return true;
      } catch {
        return "Err Saving User";
      }
    } catch {
      return "Err Checking If User Exists"
    }
  },

  update: async (findBy, newValues) => {
    // Example newValues: {username: "doe", password: "john"}
    try {
      let user =  (await USER.find(findBy))[0];
      Object.keys(newValues).forEach(prop => {
        user[prop] = newValues[prop];
      });
      try {
        await user.save();
        return true;
      } catch {
        return "Found User, But Could Not Update";
      }
    } catch {
      return "Err Finding User, Could Not Update";
    }
  },

  updateArrayProp: async(findBy={}, propName, items=[], addToArray=true) => {
    try {
      let user = (await USER.find(findBy))[0];
      let prop = user[propName].slice();
      if (addToArray) {
        items.forEach(item => {
          if (prop.indexOf(item) === -1) prop.push(item);
        });
      } else {
        items.forEach((item) => {
          let index = prop.indexOf(item);
          if (index !== -1) prop.splice(index, 1);
        });
      }
      try {
        user[propName] = prop;
        await user.save();
        return true;
      } catch {
        return "Found User, But Could Not Update"
      }
    } catch {
      return "Err Finding User";
    }
  },

  updateList: async (userName, listName, movieObj, callback) => {
    const movieJSON = movieObj.movieObj;
    const result = USER.findOne({username: userName})
    const selected = result.select(listName)
    selected
      .then((list) => {
        if(list === null) {
          list = {}
          list[listName] =[]
        }
        let arr = list[listName]
        const index = arr.findIndex(obj => obj.id === movieJSON.id)
        if(index > -1) {
          arr.splice(index, 1)
          //remove movie
            USER.findOneAndUpdate({username: userName}, {[listName]: arr}, {upsert: true, new: true}, (err, result) => {
              console.log(result)
              if(err) {
                callback(err, null)
              } else {
                callback(null, 'removed')
              }
            })
        } else {
        arr.push(movieJSON)
          //add movie
        USER.findOneAndUpdate({username: userName}, {[listName]: arr}, {upsert: true, new: true}, (err, result) => {
          console.log(result)
          if(err) {
            callback(err, null)
          } else {
            callback(null, 'added')
          }
        })
        }
      })
    }
};

module.exports = {
  User
  //Import using "import { User } from '<this_location>' "
};

