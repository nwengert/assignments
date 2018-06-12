var readline = require('readline-sync');  
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var alphabet = ('abcdefghijklmnopqrstuvwxyz');
alphabet = alphabet.split("");

inputArr = input.split("");
for (i = 0; i < alphabet.length; i++) {
    if (inputArr.includes(alphabet[i]) {
        if (inputArr[i] + shift > 26) {
            return 
        }
    }
}
loop through input and see if the character is in alphabet
if it is, then see what it's index in alphabet would be
   if shift plus it's index in alphabet would be higher than 26, 
   then subtract 26 from it and return the new smaller index in alphabet. 