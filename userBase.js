// 12. Classes
// Exercise - one array argument


class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    // don't forget to return both the array.map and the result inside!
    return this.users.map((user) => {
      return user.getName()
    });
  }

  getIntroductions() {
    return this.users.map((user) => {
      return user.getIntroduction()
    });
  }

}

module.exports = UserBase;

/* 

const User = require('./user');
const users = [new User('Uma'), new User('Josh'), new User('Ollie')];
const UserBase = require('./userBase');
const userBase = new UserBase(users);
userBase.count();
userBase.getNames();
userBase.getIntroductions();

*/