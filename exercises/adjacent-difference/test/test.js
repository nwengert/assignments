let chai = require('chai');
let assert = chai.assert;
let combined = require('../index.js');
describe('Given an array of strings, find the 3 adjacent elements with the longest combined length.'+
         'Return them in the form of an array.',()=>{
    it('Should return an array with the three consecutive elements with the longest combined length', ()=>{
        assert.equal(combined(["this", "is", "an", "array"]),(["is", "an", "array"]));
    })
}