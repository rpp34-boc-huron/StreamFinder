const bcrypt = require('bcrypt');

class Session {
  constructor() {
    this.data = {
      //
    }
  }

  async insert(data) {
    let sessionId = await bcrypt.genSalt(10);
    this.data[sessionId] = data;
    return sessionId; 
  }

  remove(sessionId) {
    delete this.data[sessionId];
  }

  validate (username, sessionId) {
    let item = this.data[sessionId];
    if (item !== undefined) {
      if (item.username === username) return true;
    }
    return false;
  }
}

let session = new Session();

module.exports = session;     