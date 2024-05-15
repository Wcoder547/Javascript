//Dates

let mydate = new Date();
//console.log(mydate);
//console.log(mydate.toString());
//onsole.log(mydate.toLocaleString());
//console.log(mydate.toLocaleTimeString());
//console.log(mydate.getMonth());
//console.log(typeof mydate); //object

let createcustomdate = new Date(2003, 7, 13, 8, 15, 36); // 0 to 11 for months
//console.log(createcustomdate.toString());
let anotherdate = new Date("08-13-2003");
//console.log(anotherdate.toString()); // Wed Aug 13 2003 00:00:00 GMT+0500 (Pakistan Standard Time)
//console.log(anotherdate.toDateString()); // Wed Aug 13 2003
//console.log(anotherdate.toLocaleDateString());  //13/08/2003

let timestamp = Date.now();
//console.log(timestamp); // in milliseconds

//console.log(Math.floor(Date.now() / 1000));

let newdate = new Date();
console.log(newdate.toDateString());
console.log(newdate.toTimeString());
console.log(newdate.getFullYear()); //2024
console.log(newdate.getMonth() + 1); //4+1 =>5
console.log(newdate.getDay()); //get the day of this week means today is thursday and it is 4th day of week.
console.log(newdate.getMinutes()); // now 12:15 am so 15 minutes

// `now time is ${newdate.toTimeString()}` in String interpols
