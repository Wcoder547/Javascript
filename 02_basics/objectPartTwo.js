// // console.log("Hello World")
// const portfolio = new Object();
// console.log(portfolio); //{}
// portfolio.name = "waseem akram";
// portfolio.skil = "web developer";
// portfolio.age = 20;
// console.log(portfolio);

const portfolio = {
    name: "waseem akram",
    age: 20,
    skil: "web developer",
    isgoodAtJavascript: true,
  };
  // console.log(portfolio)
  
  // const user = {
  //   userId: 1,
  //   userName: {
  //     fullName: {
  //       firstName: "waseem",
  //       lastName: "Akram",
  //     },
  //   },
  // };
  //console.log(user.firstName); // undefined.
  
  //console.log(user.userName.fullName.firstName); // waseem
  //console.log(user.userName.fullName.lastName); // Akram
  
  const obj1 = { 1: "a", 2: "b", 3: "c" };
  const obj2 = { 4: "d", 5: "e", 6: "f" };
  //const obj3 = Object.assign({}, obj1, obj2); //this will copy the obj1 and obj2 into {} empty new object which is called target and the obj1 and obj2 are source.
  //console.log(obj3);
  const obj = Object.create(null); // array which has null
  const obj4 = { __proto__: null }; //[object:null prototype] {}
  //console.log(obj4)
  
  const obj3 = { ...obj1, ...obj2 }; //destructuring.
  //console.log(obj3);
  
  const obj5 = { ...obj1, ...obj2, ...obj3 };
  //console.log(obj5); //it will give only sum of obj1 and obj2.
  
  const obj6 = { ...obj1, ...obj2, ...obj3, ...obj4 };
  //console.log(obj6); //osm
  
  //console.log(Object.keys(portfolio)); //return keys
  //console.log(Object.values(portfolio)); // return values
  //console.log(Object.entries(portfolio)); // return the multiples arrays which have one key and value .
  
  console.log(portfolio.hasOwnProperty("name")); // true
  console.log(portfolio.hasOwnProperty("isgoodAtJavascript")); // true
  