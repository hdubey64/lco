var User = {
   name: "",
   getUserName: function () {
      console.log(`User Name Is : ${this.name}`);
   },
};

var Vishal = Object.create(User);
console.log(Vishal);

Vishal.name = "Vishal Dubey";
Vishal.getUserName();

var sam = Object.create(User, {
   name: { value: "sammy" },
   courseCount: { value: 3 },
});

sam.getUserName();
