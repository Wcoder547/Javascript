// console.log("this is user1");

class user {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}
const user1 = new user("waseem", 123);
console.log(user.password);
