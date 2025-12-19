const mysym = Symbol("key1"); //Capital S.
const mysym2 = Symbol("key2"); //Capital S.
const army = {
  cheif: "Hafiz syed Asim munir",
  dgisi: "sir nadeem anjam shb ",
  dgc: "lft general sir faisal naseer",
  core: ["army", "isi", "mi"],
  professional: true,
  forces: {
    first: "Pak Army",
    second: "pak air force",
    thrid: "pak navy",
  },
  mysym: "mykey1",
  [mysym2]: "mykey2",
};
//console.log(army);
//console.log(army.core); // same output
//console.log(army["core"]); // same output
//console.log(army.forces.first);
//console.log(army.mysym);
//console.log(typeof army.mysym); // string .
//console.log(army[mysym2]); // mykey2
//console.log(typeof army[mysym2]); // mykey2

// you can use object.freeze() for freez so that they cannot be used by anyone ...

army.greeting = function () {
  console.log("hello sir");
};
army.greetingtwo = function () {
  console.log(`hello sir ${this.cheif}`);
};
console.log(army.greeting()); //hello sir (undefined)..
console.log(army.greetingtwo()); //hello sir hafiz syed asim munir .. (undefined)..
