let myname = "waseem akram     ";
console.log(myname.trueLentgh); //undefined

let friend = ["waseem", "fahad", "talha"];

let anotherFriend = {
  name: "hafiz fahad iqbal ",
  class: "BSIT",
  getMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

Object.prototype.waseem = function () {
  console.log("waseem is present everywhere");
};

//  Array=> object => null
//  function => object => null
//  string => object => null

//anotherFriend.waseem(); // can i do this ?? yes waseem is present everywhere
//friend.waseem(); //in array also has the object property so waseem is present everywhere

Array.prototype.heyMalik = function () {
  console.log(`Hey Malik waseem`);
};
// friend.heyMalik(); //yes it will have ..
//anotherFriend.heyMalik(); // no it will generate a Error..because object cannot access array...

//=============INHERITANCE===================

const user = {
  name: "waseem akram",
  rollNo: "BSIT51F22S021",
};
const Teacher = {
  makevideo: true,
};
const teachingSupport = {
  isAvailable: false,
};
const Tasupport = {
  makeAssignment: "js and their assignment",
  fullTimeAvailable: true,
  __proto__: teachingSupport,
};

Teacher.__proto__ = user;

//Modern Syntax

Object.setPrototypeOf(teachingSupport, Teacher);

let anotherUserName = "waseemakram        ";

String.prototype.trueLentgh = function () {
  console.log(`${this}`);

  console.log(`True length is : ${this.trim().length}`);
};

//anotherUserName.trueLentgh();
"hello        ".trueLentgh();
"Icetea   ".trueLentgh();
