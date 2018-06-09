// Write a function that accepts a string as input. 
// Write a loop to print out each letter of that string individually.

//DONE
var myString = 'boomerang'
var printLetters = function(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
    }
}
printLetters(myString);

//   Write a function that accepts a string and a single character as inputs. 
//   Write a loop that iterates over the string, and prints the position of
//     the first occurrence of the specified character. 
//   If the character is not found, tell that to the user.

// DONE
function Segundo(str, singleCharacter) {
    for (var i = 0; i<str.length; i++) {
        if (str.includes(singleCharacter)) {
            return(`the character is at position ${str.indexOf(singleCharacter)}`);
        } else {
            return("character not found");
        }
    }
}
console.log(Segundo('Windowpane', 'd'));

// Write a function that accepts an array of numbers as a parameter. 
// Quit the function when the number 42 is found. 
// Let the user know if 42 is not found.

//DONE
var miArray = [33, 44, 56, 67, 78, 42, 33, 12, 64];

var foundFortyTwo = function (arr) {
    for(i=0; i<=arr.length; i++) {
        if (arr[i]===42) {
            break;
        }
    } return('42 was found at index ' + i);
}

console.log(foundFortyTwo(miArray));


// Write a function that accepts 10 numbers in an array and then 
// prints out the smallest number out of the ten without using Math.min()

//DONE - though worth looking over again. 
function sortNumber(a,b) {
    return a - b;
}
    var numArray = [17, 23, 22, 32, 11, 42, 93, 66, 27, 46, 61];
    numArray.sort(sortNumber);
    numArray.join(",");
    console.log('the smallest number is ' + numArray[0]);