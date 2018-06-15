var assert = require("chai");

// we will import our function here later, after we write the tests

var testCases = ["", "abc", "ABC", "AbC"];

//the function we use to import code from other places is REQUIRE

var antiCaps = require("../index.js")

describe("Testing anti-caps", function() {
    it("should return empty string", function(){
        assert.equal(antiCaps(testCases[0]),"");
    });
    it("should return ABC", function(){
        assert.equal(antiCaps(testCases[1]), "ABC");
    });
    it("should return abc", function(){
        assert.equal(antiCaps(testCases[2], "abc"));
    });
    it("should return aBc", function(){
        assert.equal(antiCaps(testCases[3]), "aBc");
    });
});