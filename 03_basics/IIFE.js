//Immediately Invoked Function Expression --IIFE

// ()()
(function chai() {
  //named IIFE
  let name = "waseem akram ";
  console.log(name);
})();

((social_media_app) => {
  console.log("hello everyone");
  console.log(`${social_media_app}, this is my favourite social media `);
})("instagram");

//-------------Important----------
// used for avoding the global variable pollutioning ....
