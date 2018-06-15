// Write a function that returns the number of times that the string "code" appears 
// anywhere in the given string, except we'll accept any letter for the "d", 
// so "cope" and "cooe" would also count.

// countCode("aaacodebbb") -> 1 
// countCode("codexxcode") -> 2 
// countCode("cozexxcope") -> 2


//it works!
let y = 0
function countCode(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'c' 
        && string[i+1] === 'o' 
        && string[i+3] === 'e')
        y++;
        }
    return y;
    }
console.log(countCode('codexxcodecodexxcodecodexxcode'));


//  This would be a good case for Regex.  
// Regex (Regular Expressions) = a tool for matching strings
//  it's a rule that you compare with any given string, and then you can ask if that string represents the rule

//  regexone.com
var str = "test";
var regEx = /test/;
console.log(regEx.test(str));  //TRUE

console.log('\n');

//we want to be able to be given any string and see if it matches, AND how many, etc...

//  THe WILDCARD = /./
var str = "test";
var regEx = /..../;
console.log(regEx.test(str)); //TRUE

// word characters = /\w/;
// one or more word = /\w+/;

var str = "cope";
var regEx = /(co\we)/;
console.log(regEx.test(str));    //true

console.log('\n\tTo return an array\n')

var str = "coresfjfeoqewcojkefd;jkcodeasr;ghreihcopealksgbjcodelaks";
var regEx = /(co\we)/gi;
console.log(str.match(regEx));    
console.log(str.match(regEx).length);    

// back to the warmup - Darlene's code

//this is about as clean as you can get
function countCode(string) {
    var regEx = /co\we/gi;
    var matches = string.match(regEx);
    return matches.length;
}
console.log(countCode("coresfjfeoqewcojkefd;jkcodeasr;ghreihcopealksgbjcodelaks"));

// The ultimate shortest 

function countCode(codeString) {
    return codeString.match(/co\we/ig).length; 
}
console.log(countCode("codecozeCodexvdgcoxe"));