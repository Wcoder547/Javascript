function setUserName(username) {
  //console.log("called");
  //   console.log(this);
  this.username = username;
}
function createUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("waseemakram", "mw5667155@gmail.com", 123);

console.log(chai);
