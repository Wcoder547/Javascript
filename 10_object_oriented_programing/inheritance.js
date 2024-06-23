//=========================INHERITANCE ========================

class user {
  constructor(username) {
    this.username = username;
  }
  logIn() {
    console.log(`the user login is : ${this.username}`);
  }
}

class Teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`this course is added by : ${this.username}`);
  }
}

const teach1 = new Teacher("coffee", "coffee@gmail.com", 123);
teach1.addCourse();
teach1.logIn();

const us1 = new user("vin252");
us1.logIn();

console.log(teach1 === us1); //false
console.log(us1 === user); //false
console.log(us1 instanceof user); //true
console.log(teach1 instanceof Teacher); //True..
