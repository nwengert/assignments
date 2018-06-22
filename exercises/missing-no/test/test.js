var assert = require("chai").assert;
//three things we need
    //import the program
    //make test cases (in this case there will only be one)
    //create test

var findMissingNo = require('../index.js');

var testCase1 = [2,1,3,5]; //4
var testCase2 = [12,10, 9]; //11
var testCase3 = [-3,0,-2,3,2,-1]; //1

var expected1 = 4;
var expected2 = 11;
var expected3 = 1;

describe("Testing findMissingNo", function(){
    it('should return 4', function(){
        assert.equal(findMissingNo(testCase1), expected1);
    })
    it('should return 11', function(){
        assert.equal(findMissingNo(testCase2), expected2);
    })
    it('should return 1', function(){
        assert.equal(findMissingNo(testCase3), expected3);
    })
})