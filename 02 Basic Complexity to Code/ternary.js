//Show user a signout button if he is authenticated,
//otherwise, show him option to LogIN / Signup button.

var authenticated = false;

// if(authenticated) {
//     console.log("Show Signout button");
// } else {
//     console.log("Show LogIN option");
// }

authenticated ? console.log("SIGN OUT Button") : console.log("LOGIN");