//Create an application with following rules:
//admin  -  gets full access
//sub-admin  -  gets access to delete/create courses
//testprep  -  gets access to create/delete tests
//user  -  gets acces to consume content.

var user = "abc";

switch (user) {
    case "admin":
        console.log("You get the full access!");
        break;
    case "sub-admin":
        console.log("You get access to create/delete courses!");
        break;
    case "testprep":
        console.log("You get access to create/delete tests!");
        break;
    case "user":
        console.log("You get access to consume data.");
    default:
        console.log("Trial User!");
        break;
}