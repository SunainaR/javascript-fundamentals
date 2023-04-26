// 12. Classes
// Exercise - one string argument
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

module.exports = User;

//In node:
// const User = require('./user');
// const user = new User('Uma');
// user.getName();
// user.getIntroduction();

