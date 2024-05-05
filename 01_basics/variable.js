const accountId = 122;
let accountEmail = "waseemcodecampus@gmail.com";
var accountPassword = "21345";
accountCity = "sargodha";
let accountType;
//accountId = 321;
//console.log(accountId);
//const will never change
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountType, //this will undefined
]);
// we can change the let and var
/*there is a differnce between let and var 
var create issues in blocking and functional scope
var is globaly scoped on the other hand let&const are blocked scope 
we can also defined the identifier without the variable ..yes it is possible in js 

*/
