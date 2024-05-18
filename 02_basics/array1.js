//Array
const arr = [0, 1, 2, 3, 4];
//console.log(arr);

const fruit = ["banana", "orange", "Apple", "grapes"];
//console.log(fruit);

const mixFruit = ["Apple", "grapes", 2, true, undefined, JSON];
//console.log(mixFruit);

const newArray = new Array(0, 1, 2, 3);
//console.log(newArray);
//console.log(newArray[1]); //1

// Methods
newArray.push(4);
newArray.push(5);
//console.log(newArray);
newArray.pop();
//console.log(newArray);

newArray.unshift(-1); // add -1 into start
//console.log(newArray);

newArray.shift(); //remove first element
//console.log(newArray);

//console.log(newArray.length); //5

console.log("A", newArray);
console.log(newArray.slice(1, 3)); // it will give me values from 1 to 2 index
console.log(newArray); // return full array

console.log("B", newArray);
console.log(newArray.splice(1, 3)); // it will give me values from 1 to 3 index
console.log("c", newArray); //cut the orignal array and return remaing values of array
