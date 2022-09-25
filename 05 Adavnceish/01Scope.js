console.log(name);

var name = "Vishal";
console.log(name);

if (true) {
   let lastName = "Dubey";
   console.log(`${name}`, lastName);
}
// return:- Vishal Dubey

if (true) {
   let lastName = "Dubey";
}
console.log(`${name}`, lastName);
// return:- An Error lastName is Not Defined
