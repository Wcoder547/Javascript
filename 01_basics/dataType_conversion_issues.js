let pName = "waseem akram";
let score = "33";

//console.log(pName);
//console.log(typeof pName); //ofc string
let totalScore = Number(score);
let numpName = Number(pName);
//console.log(numpName); //this will give us NaN which is not a number
//console.log(typeof totalScore); // it will give us 33 which is number
// 33=> 33

let randomNumber = 45;
//console.log(typeof randomNumber);
let totalRandomNumber = String(randomNumber);
//console.log(typeof totalRandomNumber); //it will give 45 but in string

let isMarried = true;
let checkIt = Number(isMarried);
//console.log(checkIt); //give me 1 which is integar
// console.log(parseInt(pName)); //it will give me NaN..
//let check = "hello"; // true
let check = ""; // false

let checkBolean = Boolean(check);
//console.log(checkBolean); //it will give me true

// 1 => true , 0 => false
// "hello" => true ,"" => false

//***************************************  Operations ****************************************************** */

let str1 = "waseem";
let str2 = "akram";
let str3 = str1 + str2;
//console.log(str3);

//console.log(typeof ("1" + 2)); //string
//console.log(3 + 3 + "3"); //string 63

//console.log("4" + 4 + 4); // string. 444

//console.log(3 + ((4 * 5) % 2)); //3+(20%2)=>3+0=>3;
//console.log(true); //give us true
//console.log(+true); //1
// console.log(true+); // which is not valid .

let num1, num2, num3;
num1 = num2 = num3 = 3 + 3;
//console.table([num1, num2, num3]); // 6,6,6

let gameInit = 200;
gameInit++;
//console.log(gameInit); //201

//Must study Prefix and postfix ..

let x = 3;
const y = x++;
//console.log(`x: ${x} y: ${y}`); //x:4 y:3 it will increment the value of only x  but y will remain only x ;
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

let a = 4;
const b = ++a;
//console.log(`a : ${a} b : ${b}`); // a:5 b:5

//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

//++(++x); // this is invalid..

/************************** Examples of  Postfix & prefxix **************************** */
//Postfix
let x2 = 3n;
const y2 = x2++;

//console.log(`x2: ${x2} y2 : ${y2}`); // x2 is 4n; y2 is 3n

//Prefix
let x4 = 3n;
const y4 = ++x4;

console.log(`x4:${x4} y4:${y4}`); // x4 is 4n; y4 is 4n
