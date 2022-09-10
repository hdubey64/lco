/*
Define a Function that can the Role of a User.
A User Can Be On Following Role:
Admin With All Access.
Subadmin -  With Access to Create/Delete Courses
testprep - With Access To Create/Delete Tests
User - Consume All Content
other - Trail User.

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
   switch (role) {
      case "admin":
         return `${name} is admin with all access`;

         break;
      case "subAdmin":
         return `${name} is sub-admin with access to create and delete courses`;

         break;
      case "testprep":
         return `${name} is testprep with access to create and delete test`;

         break;
      case "user":
         return `${name} is user with access to consume all content`;

         break;

      default:
         return `${name} is a trail user`;
         break;
   }
};

console.log(getUserRole("Vishal", "testprep"));

var getRole = getUserRole("Sammy", "user");

console.log(getRole);
