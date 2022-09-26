class User {
   constructor(name, email) {
      this.name = name;
      this.email = email;
   }
   #courseList = [];

   getInfo() {
      return { name: this.name, email: this.email };
   }
   enrollCourse(name) {
      this.#courseList.push(name);
   }
   getCousreList() {
      return this.#courseList;
   }

   login() {
      return "You are logged in";
   }
}

// let vishal = new User("vishal", "hdubey64@gmail.com");

class SubAdmin extends User {
   getAdminInfo() {
      return "I am SubAdmin";
   }
   login() {
      return "Login for admin Only";
   }
}

module.exports = User;

const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCousreList());
console.log(rock.courseList);

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
