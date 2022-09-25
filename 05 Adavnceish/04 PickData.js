const user = ["Vishal", 3, "Admin"];
// let role = user[2];
// let name = user[0];

// let [name, courseCount, role] = user;

// console.log(name, role);

const myUser = {
   name: "Vishal",
   courseCount: 5,
   role: "Admin",
};
// console.log(myUser.courseCount);

const { name, courseCount, role } = myUser;
console.log(courseCount);
