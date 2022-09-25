// import User from "./06Class"

const User = require("./06Class");

const vishal = new User("vishal", "hdubey64@gmail.com");

console.log(vishal.getInfo());
vishal.enrollCourse("Rreact Bootcamp");
vishal.enrollCourse("Angulr Bootcamp");

console.log(vishal.getCousreList());

let courses = vishal.getCousreList();

courses.forEach((c) => console.log(c));
