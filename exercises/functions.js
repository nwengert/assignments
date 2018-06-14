
// Write a function that accepts two numbers 
// as parameters, and returns the sum.

//DONE
var sumificar = function(x,y) {
    return x + y;
}
console.log(sumificar(7,8));

// Write a function that accepts three numbers as 
// parameters, and returns the largest of those numbers.

// DONE
var largestNum = function (x,y,z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}
console.log('The largest of the three is: ' + largestNum(34,11,22));

// Write a function that accepts one number as a parameter, 
// and returns whether that number is even or odd. 
// (Return the string "even" or "odd");

//DONE
var parImpar = function(j) {
    return j % 2 ? 'odd' : 'even';
}
console.log('The number is ' + parImpar(445));

// Write a function that accepts a string as a parameter. 
// If the length of the string is less than or equal 
// to twenty characters long, return the string concatenated 
// with itself (string + string). 
// If the string is more than twenty characters long, 
// return the first half of the string.

//DONE
var stringLength = function (hilo) {
    if (hilo.length <= 20) {
        return hilo = (hilo + hilo);
    } else {
        return hilo.slice(0,20);
    }
}
console.log(stringLength('First I was '));



//  THESE ARE EXTRA CREDIT ////////////////////////////////////////////////////////

// Write a function that accepts a number ‘n’ as a parameter. 
// Then print the first ‘n’ Fibonacci numbers and return their sum.
    // IS THIS A FACTORIAL QUESTION?

//DONE
var fibo = function(n) {
    var myArray = [];
    var y = 0;
    for(i = n; i > 0; i--) {
        y = y + i
        myArray.push(i);
    } console.log(myArray + ' \n' + y);
}
fibo(18);

// Write a function to solve the quadratic equation.
//  (It should accept three numbers as parameters, 
//     and then return an array with the resulting x values.)

// DONE
var quadEq = function(a, b, c) {
  var result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  return ('\n\tx = '+ result1 + '\n\tx = ' + result2 + '\n');
}
console.log(quadEq(1, 3, -4));

// Write a function that accepts a string as a parameter. 
// Return the most frequently occuring letter in that string.

// // NOT DONE
<<<<<<< HEAD
///BUT CLOSE ENOUGH!

var getFreq = function(str) {
    var output = {};
    var removedChars = "";
    for (var i = 0; i < str.length; i++) {
        var character = str.charAt(i);   //str[i] means same thing
        if (output[character]) {
            output[character]++;
        }else{
            output[character] = 1;
            removedChars += character;
        }
    }
    const sortedArray = [];
    // to make descending order sorted - 
    // loop through each key/value pair and
    //  add separate objects to the array
    for (var key in output) {
        sortedArray.push({ [key]: output[key] })
    }
    return sortedArray.sort(function(obj1, obj2) {
        var key1 = Object.keys(obj1)[0];
        var key2 = Object.keys(obj2)[0];
        return obj2[key] -obj1[key1];
    })
    return {
        count: output,
        removed: removedChars
    };
    var maxObj = sortedArray.reduce(function(max, obj) {
        return obj.num > max.num? obj : max;
      });
}
console.log(getFreq('slimy smelly solution'));
  
=======
//DO THIS WITH AN OBJECT!!!

var mostFreqLetter = function(str) {
    var freqTracker = {
        
    }
}



// var mostFreqLetter = function(str) {
//     var myArray = str.split('').sort();
//     //insert a $ into the array before a character change
//     for (i = 1; i < myArray.length; i++) {
//         if (myArray[i] !== myArray[i-1]) {
//             myArray.splice(i, 0, '$');
//         } return myArray;
//     }
// }
// console.log(mostFreqLetter('Sitting by the window'));
>>>>>>> f898b3eaf61f4ba28be721d25c99de8e7077cf2b
