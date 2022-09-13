var contries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Utter Pradesh", "Delhi", "Mumbai", "Assam");

console.log(states[1]);

console.log(states.length);

states[3] = "Punjab";

console.log(states);

var user = ["Vishal", "hdubey64@gmail.com", 26, 25, false];
user.pop();
user.pop();
user.unshift("New Value");
user.shift();
// console.log(user);

console.log(user.indexOf(26));

console.log(Array.from("Vishal"));
