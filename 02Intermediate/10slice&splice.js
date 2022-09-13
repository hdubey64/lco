var user = ["Vishal", "Shashank", "Ratnesh", "Abhishek", "Ajeet", "Ajay"];

// console.log(user.slice(1, 3));
// return:- [ 'Shashank', 'Ratnesh' ]

// console.log(user.slice(1));
// return:- [ 'Shashank', 'Ratnesh', 'Abhishek', 'Ajeet', 'Ajay' ]

// user.splice(1, 2, "HI");
// console.log(user);
// return:- [ 'Vishal', 'HI', 'Abhishek', 'Ajeet', 'Ajay' ]

// user.splice(1, 3, "HI");
// console.log(user);
// return;- [ 'Vishal', 'HI', 'Ajeet', 'Ajay' ]

user.splice(1, 3, "HI", "BYE");
console.log(user);
//return:- [ 'Vishal', 'HI', 'BYE', 'Ajeet', 'Ajay' ]
