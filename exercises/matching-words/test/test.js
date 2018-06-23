
// npm init -y
// npm install -- save chai



const assert = require("chai").assert;
//three things we need
    //import the program
    //make test cases (in this case there will only be one)
    //create test

const matchWords = require('../index.js');

const testCase1 = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
// const testCase2 = 
// const testCase3 = 

const expected1 = ['lever', 'on', 'far','pull', 'the', 'right'];
// const expected2 = 
// const expected3 =

describe("Testing matching words", () => {
    it('should return an arr containing duplicates', () => {
        assert.deepEqual(matchWords(testCase1), expected1);
    });
});
