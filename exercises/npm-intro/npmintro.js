// from project folder: npm init -y
// npm install -- save <name of package>

//import package into project
// there is a build in function in node called REQUIRE

var readlineSync = require("readline-sync");

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
