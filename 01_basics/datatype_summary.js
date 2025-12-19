//++++++++++++++++++++++++++++++++++++++++++
// Stack (primitive )  Heap (Non-Primitive)..
//https://codedamn.com/news/javascript/memory-management-complete-guide
/*
Since Stack can only store fixed-size or static data, where does JavaScript store dynamic data? The answer is Heap. The heap memory, unlike stack memory, doesn’t have a fixed-size limitation, i.e., the memory gets allocated dynamically.

JavaScript uses a heap for storing variables whose size is unknown at compile time or may vary at the run time, such as objects, arrays, functions, etc.

The JavaScript Engine dynamically allocates memory to the heap. Initially, the heap size depends on available system memory, and it can be dynamically increased/decreased based on the need. You can check the current memory usage of your Node.js application using the process.memoryUsage() method. Here is an example:

*/

// in stack it will pass by value it copy the value but in heep it is pass by refrence...and it give to refrence  of that object..array& functions
//datatypes are based on memory allocation

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it

console.log(process.memoryUsage()); // { rss: 22394816, heapTotal: 6635520, heapUsed: 3670520, external: 8272 }
// Primitive datatypes -> stored in stack memory
// Reference/Non primitive datatypes -> stored in heap memory

function logMemoryUsage(label = "Memory Usage") {
  const memory = process.memoryUsage();

  const toMB = (bytes) => (bytes / 1024 / 1024).toFixed(2);

  console.log(`\n ${label}`);
  console.log(`RSS:          ${toMB(memory.rss)} MB`);
  console.log(`Heap Total:   ${toMB(memory.heapTotal)} MB`);
  console.log(`Heap Used:    ${toMB(memory.heapUsed)} MB`);
  console.log(`External:     ${toMB(memory.external)} MB`);
  console.log(`ArrayBuffers: ${toMB(memory.arrayBuffers)} MB\n`);
}

logMemoryUsage("App Start");

let myName = "waseem akram";
let secondName = myName;

//console.log(secondName);
//it will allocated in stack

secondName = "malik waseem";
//console.log(myName); // waseem akram
//console.log(secondName); // malik waseem
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory -> copy the values.

let userOne = {
  firstName: "Waseemakram",
  course: "BSIT",
  rollNo: "BSIT51F22S021",
};

//console.log(userOne.firstName); // waseemakram

let userTwo = userOne;
// console.log(userTwo);
let userCourse = (userTwo.course = "Bscs");
console.log(userCourse); //Bscs;
console.log(userOne.course); //Bscs
// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory -> gives the orignal position of ..

//Picture link : https://excalidraw.com/#json=M9abj9wYfxMqsjT01_dkO,lfVvB6GMUDcf3hTAskp3VA

//premitive datatypes-> string,number,boolean,null,undefined,BigInt,symbol
//non premitive datatypes-> array,object,function
logMemoryUsage("App End");
