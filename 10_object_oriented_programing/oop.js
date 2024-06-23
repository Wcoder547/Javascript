//===========================Object literal=========================

const user = {
  name: "waseem akram",
  isLoggedIn: true,
  loggedincount: 8,

  getUserDetails: function () {
    console.log("user data is coming from database");
    console.log(this);
    console.log(`hello :${this.name}`);
  },
};

//console.log(user.loggedincount);
//console.log(user.getUserDetails());
//console.log(this); //{}

//==============constructor function===============

// function Loggin(username, password) {
//   this.username = username;
//   this.password = password;
//   return this;
// }
// const userOne = Loggin("wcoder547", "123");
// const userTwo = Loggin("fahad547", "456"); //it will override the values ....
// console.log(userOne);
// console.log(userTwo);

function Loggin(username, password) {
  this.username = username;
  this.password = password;
}
const userOne = new Loggin("wcoder547", "123");
const userTwo = new Loggin("fahad547", "456"); //it will override the values ....
//console.log(userOne);
//console.log(userTwo);

console.log(userOne.constructor); //return function

console.log();

//IMPORTANT ABOUT NEW KEYWORD ..
//step1:sbse phle ik empty object{} create hota he jisko instance bola jata he .

//step2: constructor function called through new...

//step-3 : this keyword inject in this

//step 4 : end pe hme mil jate he ..
