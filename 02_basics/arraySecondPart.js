const friends = ["waseem", "fahad", "Talha"];
const anotherFriends = ["abdulrehman", "shams", "abdul-hadi"];
//friends.push(anotherFriends);
console.log(friends);
//console.log(friends[3][1]);
const allfriends = friends.concat(anotherFriends);
console.log(allfriends);
console.log(typeof allfriends); // object

const all_other_friends = [...friends, ...anotherFriends];
console.log(all_other_friends);

const randomArray = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, 11, 12]];
console.log(randomArray.flat(Infinity)); // it will flat the array completely
console.log(randomArray);

// const obj ={};
// obj.length=8;
// console.log(obj.length); //8 answer
