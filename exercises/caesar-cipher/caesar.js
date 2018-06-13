
//I talked with Maxx about this one.  His idea was to use the ASCII reference
// numbers like we did with another assignment, but after a few restarts
// I was about to come up with this.  



var readline = require('readline-sync');  
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question('How many letters would you like to shift? '));

var alphabet = (' abcdefghijklmnopqrstuvwxyz').split("");

var endResult = [];
            //loop through each character of the input string
for (i = 0; i < input.length; i++) {
            //save in newIndex the number of the character's index in alphabet plus the shift
    var newIndex = alphabet.indexOf(input[i]) + shift;
            //if the index and the shift are the same, then the character was a space
    if (newIndex === shift) {
            //make spaces equal to 0, because alphabet[0] is a space
        newIndex = 0;
    }
            //input and/or input + index will often be > 26, so deal with it. 
    while(newIndex > 26) {
        newIndex = newIndex - 26;
            //push the result into the endResult array
    } endResult.push(alphabet[newIndex]);
}
console.log(endResult.join(""));