
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

// Write a function that accepts a number ‘n’ as a parameter. 
// Then print the first ‘n’ Fibonacci numbers and return their sum.
    // IS THIS A FACTORIAL QUESTION?

// var fibo = function (n) {
//     y = n;
//     for (i = n - 1; i > 0; i--) {
//         var y = y + i;
//         console.log()
//     }
// }
// fibo(6);


// Write a function to solve the quadratic equation.
//  (It should accept three numbers as parameters, 
//     and then return an array with the resulting x values.)
// NOT DONE

// var quadraticEq = function(a, b, c) {
//   var equis = (-b +- );

// }

// Write a function that accepts a string as a parameter. 
// Return the most frequently occuring letter in that string.

// NOT DONE
  //these are kindof hard. 
var mostFreqLetter = function(str) {
    return str.split('').sort();
    //loop through the array until the letter changes
    //   count how many loops until the letter changes
}
console.log(mostFreqLetter('nathan'));