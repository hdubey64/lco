var user = {
   firstName: "Vishal",
   lastName: "Dubey",
   role: "Admin",
   logInCount: 32,
   facebookSigned: true,
   courseList: [],
   buyCourse: function (courseName) {
      this.courseList.push(courseName);
   },
   getCourseCount: function () {
      return `${this.firstName} is enrilled in total of ${this.courseList.length}`;
   },
   info: function () {
      console.log(
         `${this.firstName} ${this.lastName} role of ${
            this.role
         }, login count is ${this.logInCount}, loggedin by ${
            this.facebookSigned ? "Facebook" : "Geust"
         } and his course list is`
      );
      console.table(this.courseList);
   },
};

var courseList = true;

console.log(user.firstName);
//return:- Vishal

console.log(user.getCourseCount());
//return:- Vishal is enrilled in total of 0

user.buyCourse("React JS Course");
console.log(user.getCourseCount());
//return:- Vishal is enrilled in total of 1

user.buyCourse("Angular Course");
console.log(user.getCourseCount());
//return:- Vishal is enrilled in total of 2

console.table(user);

user.info();

// TODO: Creat a method info:- From first name to how much courseList
