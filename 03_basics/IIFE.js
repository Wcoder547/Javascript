//Immediately Invoked Function Expression --IIFE

// ()()
(function chai() {
    //named IIFE
  let name = "waseem akram ";
  console.log(name);
})();

((best) => {
  console.log("hello everyone");
  console.log(`${best}, this is my favourite social media `);
})("instagram");


//-------------Important----------
// used for avoding the global variable pollutioning ....