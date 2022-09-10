// User Is Only Allow To make a purachase when he is:
// logged in
// email verified
// cardInfo - valid
// If any one missing stope purchase

var isLoggedIn = true;
var isEmailVarified = true;
var cardInfo = false;

// if (isLoggedIn) {
//    console.log("Logged IN success");
//    if (isEmailVarified) {
//       console.log("Email IS verified");
//       if (cardInfo) {
//          console.log("You can make a purchase");
//       }
//    }
// }

if (isLoggedIn && isEmailVarified && cardInfo) {
   console.log("User Is  Allow To make a purachase");
} else {
   console.log("User Is  NOT Allowed To make a purachase");
}
