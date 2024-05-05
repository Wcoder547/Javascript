let name = "waseem akram";
let age = 20;
let isMarried = false;
let university;
let bankBalance = null; //give us null which is datatype
bankBalance = ""; //it will give us empty in console
let answer = 42;
answer = "Thanks for submeting"; // it will print ..because js is dynamically typed language so it datatype
//will automaticly convert during execution..
/* In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings.*/
let x, y, z;
x = "the answer is " + 42; // this will convert into string
y = 42 + " is my answer"; //it will also combine with string and become string
z = "37" + 7; // string + number=> string so the output will be 377
let u, v, s;
u = 7 - "37"; //string -number=number =>37-7=30 or number-string=number same..
v = "37" * 7; //string* number =number => 37*7=259
s = "37" / 7; //string /number=number =>37/7=5.28
console.table([u, v, s]);

// console.log([typeof name, typeof age, typeof isMarried, typeof university]);

//premitive data types 7
//Number => range i think 2 the power of 64
//bigInt => use for big values which will used in transactions,account balance and crypto..
//string => in the form of ""
// boolean which is simply in true or false
// undefined variable which is not defined just like above university..it is decalred but not defined.
//symbol => unique,immutable which cannot be chnaged.
// null which is single value mean it's empty .. null is object .you can check it through type of .

//Objects
// const portfolio = {
//   name: "waseem akram",
//   skill: "javascript developer",
//   degree: "BSIT",
// };

// console.log(portfolio.name); //waseem akram
// console.log(portfolio.skill); //javascript developer
// console.log(bankBalance);
// console.log(answer);
// console.table([x, y, z]);
