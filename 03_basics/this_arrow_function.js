// console.log("hello world");

const user = {
  name: "waseem akram",
  rollno: 21,
  welcomemsg: function () {
    console.log(`${this.name}, welcome to our website`);
    console.log(this);
    //console.log(this); //this represent to current context which means they represent the envoirmnet which they are using
    //suppose that here we are using as a object and we can use it in clinet side js in browser ..
  },
};

//user.welcomemsg();
//
//console.log(this); // {} in node this give us empty curly braces .
// in browser console this present the [object Window].
// user.welcomemsg();
// user.name = "hafiz fahad iqbal shb";
// user.welcomemsg();

//-----------Intresting----------------------------
//console.log(this); // In browser: window, In Node.js: global

// function chai(){
//     console.log(this) //will return many things ..
// }
// chai()

// const chai= function(){
//     console.log(this) //will return many things ..
// }
// chai()

// const addTwoval = (a, b) => {
//   return a + b;
// };
// console.log(addTwoval(4, 5));

// const addTwoval = (a, b) => a + b;
// console.log(addTwoval(4, 5));

// const addTwoval = (a, b) => {return a + b}; //if we are using curly braces then we must use the return keyword..
// console.log(addTwoval(4, 5));

// const obj1 = () => {
//   name: "waseem akram";
// };
// console.log(obj1()); //give us undefined ...

const obj1 = () => ({
  name: "waseem akram",
});
// console.log(obj1()); // now it will return the object ...

// const chai = () => {
//   let instaName = "waseem_malik547";
//   console.log(this.instaName);
//   // console.log(this); //{empty object}
// };
// chai();

// function chai2() {
//   let anotheruser = "talha";
//   console.log(this.anotheruser);
// }
// console.log(chai2());

// const obj = {
//   regularFunction: function () {
//     console.log(this); //obj
//     const arrowFunction = () => {
//       console.log(this); // obj (lexically inherited)
//     };
//     arrowFunction();
//   },
// };
// obj.regularFunction();

const outerFunction = {
    outerContext: function() {
        console.log(this); // outerFunction object
        const innerArrowFunction = () => {
            console.log(this); // outerFunction object (lexically inherited)
        };
        innerArrowFunction();
    }
};
outerFunction.outerContext();

