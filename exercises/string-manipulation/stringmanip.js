// from project folder: npm init -y
// npm install -- save <name of package>

//import package into project
// there is a build in function in node called REQUIRE

var readlineSync = require("readline-sync");


// Make one of the inputs all uppercase (i.e., given the string “hello” prints “HELLO”)

    // var donde = readlineSync.question(' \n Where are you right now?');
    // console.log('You are in '  + donde.toUpperCase() + '!');


// Report back the number of characters in a given input

    // var wordLength = readlineSync.question(' \nWhat is a long word?');
    // console.log('Yep! that word is ' + wordLength.length + ' letters long.')


// Concatenate (add) two separate strings together
    // var firstName = readlineSync.question(' \nWhat is your first name?');
    // var lastName = readlineSync.question(' What is your last name?');
    // console.log('\nYour full name is ' + firstName + ' ' + lastName + '\n');

// Given a long message (more than twenty letters), return only the last half of the message
    
    var mensage = readlineSync.question('Please tell me about your day in a long sentence.  ');
    var newMensage = ""
    // if (mensage.length > 20) {
    //     newMensage = mensage.slice(20, mensage.length);
    // }else{
    //     newMensage = mensage;
    // }
    // newMensage = mensage;
    // console.log('\n\tThat was boring, all I got was something about '+ newMensage + '\n');

// Using the same long message (but without making the user type it in again), 
// have your program print it to the terminal for the user to read again, 
// but specify from where it will print. 

    console.log('\n\tThis is what you told me: '+  mensage + '\n');

    var sliceSpot = readlineSync.question('That is too long, please specify a number smaller than '+ mensage.length+ ' from which I can slice it:   ');

    console.log('\n\tThanks, this is all I care about: '+ mensage.slice(sliceSpot, mensage.length + '\n\t'));
