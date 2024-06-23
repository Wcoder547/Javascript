// console.log("is js working");

const desc = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(desc);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const intro = {
  name: "waseemakram",
  skill: "developer",
  isAvailable: true,
  anythingElse: function () {
    console.log("nothing is remaining");
  },
};

// const intro1 = Object.getOwnPropertyDescriptor(intro, "name");
// console.log(intro1);
/*
{
  value: 'waseemakram',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(intro, "name", {
  writable: false,
  enumerable: false,
});

const intro1 = Object.getOwnPropertyDescriptor(intro, "name");
//console.log(intro1);
/*
{
  value: 'waseemakram',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

// for (let [key, values] of intro) {
//   console.log(`Key : ${key} values : ${values}`);
// }  //TypeError: intro is not iterable

for (let [key, values] of Object.entries(intro)) {
  if (typeof values !== "function") {
    console.log(`Key : ${key} values : ${values}`);
  }
}

/*
name ni aya q ke hmne usko enumerable false kr dia tha ...is wja se wo iterate ni hoga 
Key : skill values : developer
Key : isAvailable values : true
*/
