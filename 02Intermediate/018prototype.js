var User = function (firstName, courseCount) {
   this.firstName = firstName;
   this.courseCount = courseCount;
   this.getCourseCount = function () {
      console.log(`Course Count is: ${this.courseCount}`);
   };
};
User.prototype.getFirstName = function () {
   console.log(`Your firstname is: ${this.firstName} `);
};

var Vishal = new User("Vishal", 2);
Vishal.getCourseCount();
Vishal.getFirstName();

var Shashank = new User("Shashank", 1);
Shashank.getCourseCount();
Shashank.getFirstName();
