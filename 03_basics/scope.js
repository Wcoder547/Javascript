let a = 10;
const b = 20;
var c = 30;
if (true) {
  let a = 40;
  const b = 50;
  //console.log("inner", c); //inner 30
  var c = 60;
}
// console.log(a); //10
// console.log(b); //20
// console.log(c); //60
let x = "hello this is me .hacker";
const func1 = function () {
  let x = "hello this is x";
  console.log(x);
};
//func1(); // hello this is x
//console.log(x); //hello this is me .hacker
const func2 = function () {
  const y = "hello this is y";
  console.log(y);
};
//func2(); // hello this is y
//console.log(y);// y is not defined ...
var z = "hello this is wwwz";
const func3 = function () {
  var z = "hello this is z";
  console.log(z);
};

//func3(); // hello this is z
//console.log(z); // hello this is wwwz

{
  var a1 = "wasim";
}
console.log(a1); //wasim (var has global scope)

{
  const a2 = "qasim";
}
//console.log(a2); // not a2 defined

{
  let a4 = "ali";
}
//console.log(a4); // a4 is not defined
console.log("The end ");

//---------------important-----------------------------
//there will be different scope when we run js on node js and when we render it on client side just like in browser
//this in node.js
console.log(this); // {}
//this in browser
//console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
