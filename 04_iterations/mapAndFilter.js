// console.log("hello world");

// const myNUmber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const total = myNUmber.filter((item) => item > 4);

// console.log(total);

// const newNums = [];
// newNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);
//======================Filter=============================
// const myNUmber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const total = myNUmber.filter((item) => {
//   return item + 10; //filter whi array return krta he ..
// });

// console.log(total);
//=================MAP=====================
const myNUmber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const total = myNUmber.map((item) => {
//   return item * 10;
// });
// console.log(total); // creates new array.

// const total = myNUmber
//   .map((item) => item * 10)
//   .map((item) => item + 1)
//   .map((item) => item + 1)
//   .filter((item) => item >= 40);
// console.log(total); // creates new array.

//=====================Reduce Method ==========================

const arr1 = [1, 2, 3];
// const result = arr1.reduce((acc, val) => {
//   console.log(`acc value is ${acc} and value is ${val}`);
//   return acc + val;
// }, 0); //here 0 is the initial value ..

// console.log(result);

// const mytotal = arr.reduce((acc, val) => acc + val, 0); //shortest form
// console.log(mytotal);

const ShoppingCart = [
  {
    productName: "shirt",
    price: 1500,
  },
  {
    productName: "pent",
    price: 3000,
  },
  {
    productName: "Tie",
    price: 500,
  },
  {
    productName: "Coat",
    price: 15000,
  },
];

const priceToPay = ShoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`Your Total Bill Is ${priceToPay}`);
