// console.log("static propertry");

class user {
  constructor(username) {
    this.username = username;
  }
  logIn() {
    console.log(`THIS user is loggedIn by ; ${this.username}`);
  }
  static showId() {
    return `123`;
  }
}

class teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
  printMe() {
    console.log(` this user :${this.username} with this ${this.email}`);
  }
}

//const us1 = new user("Wcoder547");
//console.log(us1.showId());  //no one can access the static function

const teach1 = new teacher("wcoder547", "malik@gmail.com");
teach1.printMe();
console.log(teach1.showId()); //no one can access the static function
