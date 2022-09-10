// Create An Applicatione With Follwing Roles:
// Admin Get Full Access
// Subadmin - Gets Access To Create/Delete Courses
// Testprep - Gets Access To Create/Delete Tests
// User - Gets Access To Consume Contant

var user = "admin";

switch (user) {
   case "admin":
      console.log("You Get full Access");
      break;
   case "subAdmin":
      console.log("Gets Access To Create/Delete Courses");
      break;
   case "testprep":
      console.log("Gets Access To Create/Delete Tests");
      break;
   case "user":
      console.log("Gets Access To Consume Contant");
      break;

   default:
      console.log("Trail User");
      break;
}
