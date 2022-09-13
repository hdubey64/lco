var testArray = [2, 4, 6, 3, 1, 5, 9, 8];
console.log(testArray.fill("0"));
// return:- [ 0, 0, 0, 0, 0, 0, 0, 0]

console.log(testArray.fill("h"));
// return:- ['h', 'h', 'h', 'h', 'h', 'h', 'h','h']

console.log(testArray.fill("h", 2));
// return:- [2, 4, 'h', 'h', 'h', 'h', 'h', 'h']

console.log(testArray.fill("h", 2, 4));
// return:- [ 2, 4, 'h', 'h', 1, 5, 9, 8]
console.log(testArray.fill("empty"));
// return:- ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']

const myNumber = [24, 48, 47, 55, 75, 85, 69, 36, 45];

// const result = myNumber.filter((num) => num != 55);
// console.log(result);
// return:- [ 4, 48, 47, 75, 85, 69, 36, 45]

const result = myNumber.filter((num) => num < 55);
console.log(result);
// result:- [ 24, 48, 47, 36, 45 ]
