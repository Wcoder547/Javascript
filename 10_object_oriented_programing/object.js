function multiply(num) {
  return num * 5;
}
//console.log(multiply(5)); //25
multiply.power = 2;
//console.log(multiply.power); //2
//console.log(multiply.prototype); //{}
//IMP : javascript me hr chz object hoti he Almost ..function function bhi he sth object bhi he
//Function-> object->null
//array-> object-> null
// string -> object ->null

function createUser(username, score) {
  this.username = username;
  this.score = score;
}
createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`Score: ${this.score}`);
};

const tea = new createUser("Tea", 255);
const coffe = new createUser("coffee", 455);
console.log(tea); //object pore ka pora object hme mil gya he return
tea.printMe();
coffe.increment(); //cofee ki value ko increment kre ga .
console.log(coffe); // ab pora object return kre ga and the coffe value is 455+1=456..

/* =============Notes About New Keyword ====================
  
  Here's What happens behind the scenes when new keyword is used :
  
  -> A new object is created: the new keyword initiates the creation of the new javascript object .
  
  -> A Prototype is linked : the newly created object gets linked to the prototype property of the constructor function .
  this means it has the access to properties and  methods defined on the constructor 's prototype.
  
  -> The constructor is called :  the constructor function is called with the specified arguments and this is bond to 
  the newly created object . if no explict return value is specified from the constructor javascript assume this ,
  newly created object to be intended return value .
  
  -> The new object is returned: After the constructor function has been called , if it does not return a non-premitive value 
  (object,fucntion ,array etc). the newly created object is returned 
  
  
  */
