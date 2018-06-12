// 1) Make a function that takes a string and returns that string reversed.

//DONE
let reverseStr = function(str) {
    return str.split("").reverse().join("");
}
console.log("The string is reversed: " + reverseStr("computer console"));


// 2) Make a function that takes a string and returns true if the string could 
//   be a number else return false.

//DONE
let isNum = function(str) {
    if(isNaN(str)) {
        return (str + " is NOT a number");
    } else {
        return (str + " is indeed a number");
    }
}
console.log(isNum('3'));
console.log(isNum('porcupine'));


// 3) Make a function that takes a number and returns true if the number is even 
//   else return false.

//DONE
let isEven = function(num) {
    if (num % 2) {
        return (num + " is NOT an even number");
    }else{
        return (num + " is indeed an even number");
    }
}
console.log(isEven(14));
console.log(isEven(37));


// 4) Make a function that takes an array and returns the average of the array.

//DONE
theArray = [2, 6, 12, 3, 17, 22];
let averageArray = function(arr) {
    var y = 0;
    for (i = 0; i < theArray.length; i++) {
        y = y + theArray[i];
    } return y / theArray.length;
}
console.log("The average of the array is " + averageArray(theArray));


// 5) Make a function that takes two arrays and returns a single array of the items
//    from the arrays added alternatingly.

//DONE
alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
numeros = [1, 2, 3, 4, 5, 6, 7, 8];

let combineArrays = function(arr1, arr2) {
    let myArray = [];
    for (i = 0; i < 6; i++) {
        myArray.push(alphabet[i]);
        myArray.push(numeros[i]);
    } return myArray;
}
console.log(combineArrays(alphabet, numeros));