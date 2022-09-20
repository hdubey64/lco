const vishal = {
   firstName: "Vishal",
   lastName: "Dubey",
   role: "Admin",
   courseCount: 3,
   getInfo: function () {
      console.log(`
    First name is ${this.firstName}
    Last name is ${this.lastName}
    His role is ${this.role}
    and he is studying ${this.courseCount} courses
    `);
   },
};

const dj = {
   firstName: "Rock",
   lastName: "DJ",
   role: "Sub-Admin",
   courseCount: 4,
};

// vishal.getInfo();
// dj.getinfo();

// var djInfo = vishal.getInfo.bind(dj);
// djInfo();

vishal.getInfo.call(dj);
