// You will create three functions.

// The first function will take this array, and print it to the console. 
//     Make sure to add spaces in-between each word so it looks nice on the console
// The second function will do the same thing, but print the song backwards 
//     (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).
// The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.

// Optional Challenge:

// Create a fourth function that reverses every two words. So the end result would look like this: 
//     "hit This ice that Michelle cold" ...

var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

var funPrint = function(str) {
    return(str.join(' '));
}
 console.log(funPrint(lyrics));



 var bkwrdsPrint = function(str) {
     var lyricsCopy = str.slice();
     lyricsCopy.reverse();
     return(lyricsCopy.join(' '));
 }
 console.log(bkwrdsPrint(lyrics));


var everyOther = function(str) {
    var everyOtherArray = [];
    for(i = 0; i < lyrics.length; i++) {
        if(i % 2 === 0) {
            everyOtherArray.push(str[i]);
        }
     return(everyOtherArray.join(' '));
    }
}
 console.log(everyOther(lyrics));


//  THE FOURTH ONE

var reverseEveryOther = function(arr){
    //find each pair in array and switch them  --with a FOR loop
    var copy = arr.slice();
    for(var i = 1; i < copy.length; i+=2){
        var first = copy[i-1];
        var second = copy[i];
        copy[i] = first;
        copy[i-1] = second;
    }
    return copy.join(' ');
}
console.log(reverseEveryOther(lyrics));
