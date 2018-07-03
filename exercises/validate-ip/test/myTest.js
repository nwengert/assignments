let chai = require('chai');

// THESE ARE THE NODE COMMANDS FOR TESTING
//npm i-g mocha
//npm install chai

let assert = chai.assert;

let validateAddress = require('./app.js');

//first part of the test is to describe what the function does
describe('Given a string, write a function that determines whether it is a valid IP address.', ()=>{
    it("should return true when it receives a valid ip address", ()=> {
        assert.equal(validateAddress('3.89.230.0'), true)
    })
    it("should return false when the ip address contains letters", ()=> {
        assert.equal(validateAddress('aa.89.230.0'), false)
    })
    it("should return false when if the ip address contians empty strings", ()=>{
        assert.equal(validateAddress('0.30..90'), false)
    })
})

