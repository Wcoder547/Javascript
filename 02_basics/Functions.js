//console.log("hello world");

const userName = function () {
  console.log("hello waseem_akram");
};
//userName() // function call.

const sum = function (a, b) {
  return a + b;
};
// const total=sum(5,"5"); //55
//const total=sum(5,null); //5
//const total=sum(5,undefined); //NAN
//const total=sum(5,Symbol); //5 function symbol()
//console.log(total);

const userLoggedIn = function (name) {
  if (!name) {
    return;
  }
  console.log(`hello user ${name} is loggedin`);
};
//console.log(userLoggedIn("waseem"));
//console.log(userLoggedIn(""));
//console.log(userLoggedIn(undefined));
//console.log(userLoggedIn(null));

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

function mufunc(thearray){
    thearray[0]=30;
  }
  const arr=[45];
  console.log(arr[0]); // 45 
  mufunc(arr);
  console.log(arr[0]);  //30
