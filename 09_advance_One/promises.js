// fetch("https://something.com").then().catch().finally(); //Basic syntax
// what is promise ..
// it is used to handle async operation in js ..
// it is a object that  represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   //DB  calls ..conntect..send..recive ..inject  CryptoGraphy Network Call

//   setTimeout(function () {
//     console.log("async task is completed ");
//     resolve();
//   }, 2000);
// });
// promiseOne.then(function () {
//   console.log("process is consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("async task 2 is resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({
//       name: "waseem akram",
//       gmail: "malikwaseemshzad@gmail.com",
//     }); // in resolve parameter we can pass object ,fucntion and array ....
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   //   console.log(user);
//   //   console.log(user.gmail);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "wcoder547", password: "123" });
//     }
//     if (error) {
//       reject("Error,Something Went Wrong!!");
//     }
//   }, 1000);
// });

// promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is resolved or rejected"));

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "wcoder547", password: "123" });
//     }
//     if (error) {
//       reject("Error,Something Went Wrong!!");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
//getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
