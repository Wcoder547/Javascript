//If condition

if (true) {
  //console.log("this is true statement");
}

if (false) {
  console.log("this will not run");
}
if (2 == "2") {
  //console.log("is it true");
}

const userLoggedIn = true;
const userLoggedInGmail = true;

if (userLoggedIn && userLoggedInGmail) {
  //console.log("Congratulations for successfully login");
}

//<,>,<= ,>= ,!= , ==,=== && || ? ??

// const marks = 81;
// if (marks >= 80 && marks <= 100) {
//   console.log("congratulations on gettng A+ grade");
// } else if (marks >= 50 && marks < 80) {
//   console.log("You've passed");
// } else {
//   console.log("you're fail because you are in university of sargodha");
// }

// const month = 3;

// switch (month) {
//   case 1:
//     console.log("jan");
//     break;

//   case 2:
//     console.log("feb");
//     break;
//   default:
//     console.log("march");
//     break;
// }

// const userEmail = "mw5667155@gmail.com";
// if (userEmail) {
//   console.log("you've loggedIn");
// } else {
//   console.log("Go first,login");
// }

// const userEmail = ""; //false
// if (userEmail) {
//   console.log("you've loggedIn");
// } else {
//   console.log("Go first,login");
// }

// const userEmail = []; //true
// if (userEmail) {
//   console.log("you've loggedIn");
// } else {
//   console.log("Go first,login");
// }

// const userEmail = {}; //true
// if (userEmail) {
//   console.log("you've loggedIn");
// } else {
//   console.log("Go first,login");
// }

// const userEmail = " "; //true
// if (userEmail) {
//   console.log("you've loggedIn");
// } else {
//   console.log("Go first,login");
// }

//Falsy values

//false , 0 ,-0, bigInt 0n , "" , null ,undefined , NaN ;

//Truthy values

// "0" , "false" , " " , [] , {} ,function(){} ,

const arr = [];

// if (arr.length === 0) {
//   console.log("Array is Empty");
// } else {
//   console.log("Array is not Empty");
// }

// const myObj = {};
// if (Object.keys(myObj) === 0) {
//   console.log("object is empty");
// } else {
//   console.log("object is not empty");
// }

// false == 0 => true
// false == '' => true
// 0 == '' => true

//Nulish coalescing operator  (??) : null,undefined
let val1;
// val1 = null ?? 5; //5
// val1 = undefined ?? 5; //5
// val1 = null ?? undefined; //undefined ..
val1 = null ?? 10 ?? 20; //10
// console.log(val1);

//Terniary Operator..

// condition?true : false
let a = 3;
a > 3 ? console.log("yes it is true ") : console.log("it is false ");
