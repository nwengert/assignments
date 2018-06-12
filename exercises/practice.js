
// Write a function that takes an array of numbers 
// and returns the largest (without using Math.max())

theArray = [3,2,5,4,8];
//DONE
var findLargest = function(arr) {return theArray.sort().pop();}
console.log(findLargest(theArray));

// Write a function that takes an array of words and a character 
// and return each word that has that letter present.

//DONE
arrayWithStrings = ['n@te', 'mou5e', '$$%', '99lo@', '$yjj6'];
var findCharacters = function(str) {
    var newArray = [];
    //loop through each item in the array
    for(i = 0; i < arrayWithStrings.length; i++) {
        if(arrayWithStrings[i].includes(str)) {
            newArray.push(arrayWithStrings[i]);
        }
    } return newArray;
}
console.log(findCharacters('$'));

// Write a function that takes a num1 and num2 
// and returns whether num1 is divisible by num2.

//DONE
var isDivisible = function(x,y) {
    if(x % y) {
        return false;
    }else{
        return true;
    }
}
console.log(isDivisible(31,3));