var user = {
   firstName: "Vishal",
   lastName: "Dubey",
   role: "Admin",
   logInCount: 32,
   facebookSigned: true,
};

console.log(user.firstName);
// return:- Vishal

console.log(user["lastName"]);
// return:- Dubey

console.log(user.logInCount);
// return:- 32

user.logInCount = 44;
console.log(user.logInCount);
// return:- 44

console.table(user);
// return:- ┌────────────────┬──────────┐
// │    (index)     │  Values  │
// ├────────────────┼──────────┤
// │   firstName    │ 'Vishal' │
// │    lastName    │ 'Dubey'  │
// │      role      │ 'Admin'  │
// │   logInCount   │    44    │
// │ facebookSigned │   true   │
// └────────────────┴──────────┘

/*
TODO: 
        Insrt Properties:- name, modelNumber, yearReleas, price put thease properties
        in var iPhoneNewModel Click A Photo And share it to Instagram
*/

var iPhoneNewModel = {
   modelName: "iPhone 14 Pro Max",
   price: "₹ 1,39,900.00/-",
   rom: "128 GB",
   display: "17.02 cm (6.7 inch) Super Retina XDR",
   camera: "48MP + 12MP + 12MP + 12MP | 12MP Front",
   Processor: "A16 Bionic Chip, 6 Core",
};

console.table(iPhoneNewModel);
