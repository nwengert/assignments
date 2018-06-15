// Write a function called antiCaps which accepts a string 
// and returns a string. The purpose of the function is 
// to invert the capitalization of each letter in a string.

//DONE
  var antiCaps = function(str) {
    newStr = str.slice("");
    myArray = []
    for(i = 0; i < newStr.length; i++) {
        if(newStr[i] === newStr[i].toUpperCase()) {
            myArray.push(newStr[i].toLowerCase());
        }else{
            myArray.push(newStr[i].toUpperCase());
        }
    } 
    return myArray.join("");
  }
// console.log(antiCaps('My Name is Nathan Wengert'));