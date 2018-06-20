// Tues june 19 lecture

localStorage.setItem("foo", "bar");

//you'ss see this in the browser's Application > Local Storage > selection under there
//  only booleans, numbers, and strings.  

localStorage.setItem("myAge", 32);
localStorage.setItem("iLikeCake", 'true');

//can't do objects
// an array of numbers would store as a string
localStorage.setItem("primes", [2,3,5,7,11]);

var foo = localStorage.getItem("foo");
console.log(foo);

var myAge = localStorage.getItem("myAge");
console.log( typeof myAge);

var myPrimes = localStorage.getItem("primes");
console.log(myPrimes);
console.log(myPrimes[2]);

//You CAN store things as JSON objects
localStorage.setItem("primeCopy", JSON.stringify([2,3,5,7,11]));
var myPrimes = localStorage.getItem("primeCopy")
// to DE-STRINGIFY
    //JSON.parse
console.log( JSON.parse(myPrimes));

// so if you're going to store something locally that isn't a string, 
//      make sure you stringify it first, so that when you want to pull
//      it back, you can JSON.parse it to turn it back into what it was. 
//  but if you parse a primitive data type, it will turn it back into what it's supposed to be.  