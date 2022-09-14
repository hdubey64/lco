// for (let i = 0; i < 10; i++) {
//    console.log(i);
// }
// /* return:- 0
//             1
//             2
//             3
//             4
//             5
//             6
//             7
//             8
//             9
//             */

// for (let i = 0; i <= 10; i++) {
//    console.log(i);
// }
/* return:- 0
            1
            2
            3
            4
            5
            6
            7
            8
            9
            10
            */

const myStates = [
   "Utter Pradesh",
   "Delhi",
   "Assam",
   1947,
   "Tamil Nadu",
   "Maharastra",
];

for (let i = 0; i < myStates.length; i++) {
   if (typeof myStates[i] !== "string") continue;
   console.log(myStates[i]);
}
/* return:- Utter Pradesh
            Delhi
            Assam
            Tamil Nadu
            Maharastra*/

for (let i = 0; i < myStates.length; i++) {
   if (typeof myStates[i] == "string") continue;
   console.log(myStates[i]);
}
/* return:- 1947 */

for (let i = 0; i < myStates.length; i++) {
   if (typeof myStates[i] !== "string") break;
   console.log(myStates[i]);
}
/* return:- Utter Pradesh
            Delhi
            Assam */
