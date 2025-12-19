const score = 400;
//console.log(score);
const gamescore = new Number(100);
//console.log(gamescore); // Object  and output will be like [100]
//console.log(gamescore.toExponential()); //In the form of e
//console.log(gamescore.toFixed(2)); //100.00
//console.log(gamescore.toLocaleString()); // converts it into string | 10,000,000
//console.log(gamescore.toPrecision(2));
//console.log(gamescore.toString()); // it will convert the number into string
//console.log(gamescore.valueOf()); //
//console.log(Number.EPSILON);
//console.log(Number.MAX_SAFE_INTEGER.toExponential()); //The maximum safe integer in JavaScript (253 - 1).
//console.log(Number.MIN_SAFE_INTEGER.toExponential()); // The minimum safe integer in JavaScript (-253 - 1).
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

//++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++
//console.log(Math); // object Math

//console.log(Math.random()); //it will give random values between 0 and 1 ;
//console.log(Math.random() * 10 + 1);
//console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;
console.log(Math.random()); //0 to 1
console.log(Math.floor(Math.random() * (max - min))); //0 to 10
console.log(Math.floor(Math.random() * (max - min) + 1)); //1 to 10
console.log(Math.floor(Math.random() * (max - min) + 1 + min)); //10 to 20


// Math.ceil
// Math.round
// Math.max
// Math.min
// Math.sqrt
//
