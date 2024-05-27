// console.log("hello world");

// function calculateCartPrice(...num1) {
//   return num1;
// }
// console.log(calculateCartPrice(500, 200, 1000, 1500));

function calculateCartPrice(val1, val2, ...num1) {
    return val1, val2, num1;
  }
  //console.log(calculateCartPrice(500, 200, 1000, 1500));
  
  const user = {
    name: "Waseem akram",
    age: 20,
  };
  
  function intro(theobj) {
    console.log(`hello my name is ${theobj.name} and my age is : ${theobj.age}`);
  }
  // intro(user)
  // intro({
  //   name: "hafiz fahad iqbal",
  //   age: 47,
  // });
  
  
  const fruit=["banana","peach","mango","strawberry"];
  
  function listOfFruits(thearr){
    console.log(`The list of fruits : ${thearr}`)
  }
  
  // listOfFruits(fruit)
  listOfFruits([
    "banana","peach","mango","strawberry"
  ])