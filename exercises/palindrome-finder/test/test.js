//Tues 19 June 2018

// We're writing a test for this one first

// npm init -y

//PALINDROME FINDER
// Write a function that accepts a string as an argument and returns true 
// if the string is a palindrome (the string is the same forward and backward), or false if it is not.
// A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.

var assert = require("chai").assert;

//import the program
var palindromeFinder = require("../index.js")

// create test cases
var testCases = [
    "I madam, I made radio! So I dared! Am I mad?? Am I?!", 
    "palindrome",
    "Star Rats!"
]

describe("testing palindrome finder function", function(){
    it("case 0 should return true", function(){
        assert.isTrue(palindromeFinder(testCases[0]));
    });
    it("case 1 should return false", function(){
        assert.isFalse(palindromeFinder(testCases[1]));
    });
    it("case 2 should return true", function(){
        assert.isTrue(palindromeFinder(testCases[2]));
    })
});

// test by CDing into folder and running mocha in terminal
