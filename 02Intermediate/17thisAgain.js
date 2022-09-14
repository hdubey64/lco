console.log(this);

var user = {
   firstName: "Vishal",
   courseCount: 4,
   getCourseCount: function () {
      console.log("Line 80", this);
   },
};

user.getCourseCount();
/* return:- Line 80 {
            firstName: 'Vishal',
            courseCount: 4,
            getCourseCount: [Function: getCourseCount]
            }
*/

var user = {
   firstName: "Vishal",
   courseCount: 4,
   getCourseCount: function () {
      console.log("Line 80", this);
      // Confusing Part
      function sayHello() {
         console.log("Hello");
         console.log("Line 28", this);
      }
      sayHello();
   },
};
