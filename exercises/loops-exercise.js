// Write a function that accepts a string as input. Write a loop to print out each letter of that string individually.

// NOT DONE  ----I don't know how to make this into a function
var str = 'avacado'
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

//   Write a function that accepts a string and a single character as inputs. 
//   Write a loop that iterates over the string, and prints the position of
//     the first occurrence of the specified character. 
//   If the character is not found, tell that to the user.

// DONE
function Segundo(str, singleCharacter) {
    for (var i = 0; i<str.length; i++) {
        if (str.includes(singleCharacter)) {
            return('the character is at position ' + str.indexOf(singleCharacter));JSON
        } else {
            return("character not found");
        }
    }
}
console.log(Segundo('Windowpane', 'd'));


// Write a function that accepts an array of numbers as a parameter. 
// Quit the function when the number 42 is found. 
// Let the user know if 42 is not found.

// NOT DONE ---- yo no se


function fortyTwo(arr) {
var miArray = [13,54,17,22,54,87,56,42,37,44,12];
    for (i = 0; i < miArray.length; i++) {
        if (miArray[i] == 42) {
            return('the number 42 was found at position ' + miArray[i]);
        } else {
            return('the number 42 was NOT found');
        }
    }
}
console.log(fortyTwo(miArray));


// Write a function that accepts 10 numbers in an array and then 
// prints out the smallest number out of the ten without using Math.min()

// NOT DONE
    var thisArray = [5, 17, 23, 22, 32, 42, 93, 27, 46, 61];
    var j = thisArray[0]

    function findSmallest(thisArray) {
        for (i = 1; i < thisArray.length; i++) {
            if (j < i) {
                i = j;
            }
        }
        return(i);
    }
    console.log(findSmallest(thisArray))