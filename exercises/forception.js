// Use two loops to make an array with John: alphabet Jacob alphabet, etc...


//DONE
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz"; 

var myArray = [];
var newAlphabet = alphabet.toUpperCase();


for (i = 0; i < people.length; i++) {
    myArray.push(people[i]);
    for (y = 0; y < newAlphabet.length; y++) {
        myArray.push(newAlphabet[y]);
    }
}
console.log(myArray);
