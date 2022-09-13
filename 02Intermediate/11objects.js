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
        in var iPhoneNew Model Click A Photo And share it to Instagram
*/
