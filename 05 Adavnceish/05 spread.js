// let returnedValue = Math.max(2, 5, 6, 8, 10, 11, 15, 2, 12, 25, 19, 20, 23);
// console.log(returnedValue);

// let myObj = {};
// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
// console.log(myObj);

function sumOne(a, b) {
   return a + b;
}

let myA = [5, 9, 12];
//console.log(sumOne(...myA)); // Soread Operator

function sumTwo(a, b, ...args) {
   console.log(args);
   let multi = a * b;
   let sum = 0;
   for (const arg of args) {
      sum += arg;
   }
   return [sum, multi];
}

console.log(sumTwo(2, 3, 1, 1, 1));
