//TODO: Part:- For THIS keyword

console.log(this);

var game = "basketball";

function sayName() {
   var name = "Vishal";
   console.log(this);
}

sayName();
