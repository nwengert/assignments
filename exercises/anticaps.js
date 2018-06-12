// Write a function called antiCaps which accepts a string 
// and returns a string. The purpose of the function is 
// to invert the capitalization of each letter in a string.
function isCaps(letter) {  
    return letter === letter.toUpperCase();
  } 
var antiCaps = function(str) {
     var newStr = str.split("");
     var newerStr = [];
     for (i = 0; i < newStr.length; i++) {
         if(isCaps(newStr[i])) {
             newerStr.push(newStr[i].toLowerCase);
         }else{
             newerStr.push(newStr[i].toUpperCase);
         }
     }return newerStr;
 }
 console.log(antiCaps('This is that ice cold'))