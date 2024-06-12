// console.log("hello world");

function one() {
  const username = "Waseem akram";
  function two() {
    const website = "wcoder547";
    console.log(username);
  }
  two();
  //console.log(website);
}
one();
//console.log(username);

if (true) {
  const username = "waseem akram";
  if (true) {
    const website = "wcoder547";
    console.log(username);
  }
  //console.log(website);
}
//console.log(username);

//---------------Intresting-----------------------------

//Hoisting....

console.log(addone(5)); //6
function addone(value) {
  return value + 1;
}
console.log(addtwo(7)); //throw an error bacause it stores in a variable ..
const addtwo = function (value) {
  return value + 2;
};
//javascript make a tree in which a variables and function are hold .... 



