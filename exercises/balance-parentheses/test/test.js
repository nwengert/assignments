let chai = require('chai');

// THESE ARE THE NODE COMMANDS FOR TESTING
//npm i -g mocha
//npm install chai

//this is my best test so far.  July 3

let assert = chai.assert;

let balanceParentheses = require('../App.js');

describe("Given a string including parentheses, write a function that "+
        "returns true if every opening parenthesis has a closing parenthesis.", ()=> {
    it("Should return true if opens with openParen, and both are balanced", ()=>{
        assert.equal(balanceParentheses("()()"), true);
    })
    it("Should return true if balanced", ()=>{
        assert.equal(balanceParentheses("(())"), true);
    })
    it("Should return false if unbalanced", ()=>{
        assert.equal(balanceParentheses("()))"), false);
    })
    it("Should return false if opens with closeParen", ()=>{
        assert.equal(balanceParentheses(")()("), false);
    })
    it("Should return false if ends with openParen", ()=>{
        assert.equal(balanceParentheses("())("), false);
    })
})
