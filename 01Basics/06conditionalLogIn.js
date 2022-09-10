// Allow udser to access course if he is:
// Logged in from email
// Logged in from Google
// Logged in from facebook

var email = false;
var facebook = true;
var google = false;

if (email || facebook || google) {
   console.log("You Are allow to do that");
}

if (email) {
   console.log("Logged in successfully via email");
}

if (facebook) {
   console.log("Logged in successfully via Facebook");
}
if (google) {
   console.log("Logged in successfully via Google");
}
