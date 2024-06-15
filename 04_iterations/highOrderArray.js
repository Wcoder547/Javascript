// console.log("hello world ");

// ["", "",""]
// [{},{},{}]

//===============FOR OF LOOP ========================================

const myArray = ["hafiz", "talha", "abdulRehman", "shamsAli", "Abdulhadi"];
// for (const item of myArray) {
//   console.log(item);
// }

// const greeting = "Hello World";
// for (const word of greeting) {
//   console.log(word);
// }

//Maps
//===============================MAPS======================================

const maps = new Map();
maps.set("PK", "Pakistan");
maps.set("UK", "United Kingdom");
maps.set("USA", "United State Of America");

// for (const item of maps) {
//   console.log(item);
// }

// for (const [key, val] of maps) {
//   console.log(`${key} :- ${val}`);
// }

const obj1 = {
  name: "waseem_akram",
  f_name: "M Akram",
  Rollno: "BSIT51F22S021",
};
// for (const item of obj1) {
//   console.log(item);
// } //object is not iteratable...

// for (const [key, val] of obj1) {
//   // console.log(key, val); //also error here because obj1 is not iteratale..
// }

//===============================For IN LOOP ==================================================

const language = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
  Py: "Python",
};

// for (const key in language) {
//   //   console.log(key); //give us keys ..
//   //   console.log(language[key]); //give us the values of object
//   //   console.log(`${key} stands for ${language[key]}`);
// }

// const langArray = ["js", "py", "cpp", "swift"];
// for (const key in langArray) {
//   console.log(key); //give us index
// }

// const langArray = ["js", "py", "cpp", "swift"];
// for (const key in langArray) {
//   console.log(langArray[key]); //give us values on indexes just like js ,py ...
// }

// const langArray = ["js", "py", "cpp", "swift"];
// for (const [key, val] in langArray) {
//   console.log(`the key is ${key} and the value is ${val}`); //undefined..
// }

// for (const product in maps) {
//   console.log(product); //gives you nothing
// }
// for (const product in maps) {
//   console.log(maps[product]); //gives you nothing
// }

//==========================FOR-EACH LOOP ====================================

const webSeries = ["hostel_days", "jee krda ", "imMature", "Kota-Factory"];

const favSeries = webSeries.forEach((item, index, arr) =>
  console.log(item, index, arr)
);
// console.log(favSeries);

// const favSeries = webSeries.forEach((item) => console.log(item));

// const favSeries = webSeries.forEach((item) => {
//   return item;  // no return
// });

// const favSeries = webSeries.forEach(printme);
// function printme(item) {
//   console.log(item);
// }
// console.log(favSeries);

const codingCourse2 = [
  {
    language: "js",
    price: 2999,
  },
  {
    language: "python",
    price: 4999,
  },

  {
    language: "java",
    price: 6999,
  },

  {
    language: "swift",
    price: 12999,
  },
];

codingCourse2.forEach((item) => {
  console.log(item.language);
});
