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
}

let vishal = new User("vishal", "hdubey64@gmail.com");

module.exports = User;

const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCousreList());
console.log(rock.courseList);
