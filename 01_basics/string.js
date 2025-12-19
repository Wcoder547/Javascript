const name = "waseem akram";
const snapscore = "150000";
console.log(`${name} has ${snapscore}`);

const gameName = new String("pubg");
console.log(gameName.__proto__); //it will give us the list of all predefined functions .
// console.log(typeof gameName); // it is object
/*
{ 0: 'p',
  1: 'u',
  2: 'b',
  3: 'g',
}
*/
//console.log(gameName[2]); //b;
//console.log(gameName.toUpperCase()); //PUBG
//console.log(gameName.anchor("pubg")); //<a name="pubg">pubg</a>
console.log(gameName.charAt(3)); //g
//console.log(gameName.blink());
//console.log(gameName.fontsize()); //it give us <font size="undefined">pubg</font>
console.log(gameName.slice(-3, 4)); //end wale 3 dega like in pubg it will give ubg.
console.log(gameName.substring(-2, 4)); //it ignore negative values..it start from 0
// console.log(2 + "2");
let sum = "2" + 2;
console.log(sum);
console.log(typeof sum);
