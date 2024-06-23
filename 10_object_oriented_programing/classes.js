// // //ES6
// // console.log("is js working")

// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encrytPassword() {
//     return `${this.password}abc`;
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const fc1 = new user("wcoder547", "malik@gmail.com", 234);
// console.log(fc1.changeUserName());
// console.log(fc1.encrytPassword());

//behind the scenes

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encrytPassword = function () {
  return `${this.password}abc`;
};
user.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const fc2 = new user("waseemmalik547", "hafiz@gmail.com", 234);
console.log(fc2.encrytPassword());
console.log(fc2.changeUserName());
