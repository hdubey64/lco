var name = "Vishal";

console.log("Line number 3", name);

function sayName() {
   var name = "Mr. Vineet";
   console.log("Line number 6", name);
   sayName2();

   function sayName2() {
      var name = "Mr. Puneet";
      console.log("Line number 11", name);
   }
}

sayName();
