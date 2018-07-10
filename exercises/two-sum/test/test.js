//july 9
// THESE ARE THE NODE COMMANDS FOR TESTING
//npm i -g mocha  (don't need this every time)
//npm init -y
//npm install --save chai
const assert = require("chai").assert;

const twoSum = require('../twosum.js') //two periods!
// that file needs to have
//      module.exports = twoSum;        at the bottom


// HOW TO WRITE A TEST

// describe('the problem', () => {
//     it('Shold do whatev', () => {
//         assert.equl(twoSum('test case'), true);
//     })
//     it('Shold do whatev', () => {
//         assert.equl(twoSum('test case'), true);
//     })
//     it('Shold do whatev', () => {
//         assert.equl(twoSum('test case'), true);
//     })
// })

const testCases = [
    {
        arr: [1,2,3],
        int: 4
    },
    {
        arr: [2,8,3,7],
        int: 10
    },
    {
        arr: [5,6,7,8],     //this will be false
        int: 20
    }
]

//write test

describe('Given an array of integers and a target integer, return the indices of the FIRST two numbers which add up to the target.', () => {
    it('Should return [0, 2]', () => {
        assert.deepEqual(twoSum(testCases[0].arr, testCases[0].int), [0, 2]);
    })
    it('Should return [0, 1]', () => {
        assert.deepEqual(twoSum(testCases[1].arr, testCases[1].int), [0, 1]);
    })
    it('Should return false', () => {
        assert.isFalse(twoSum(testCases[2].arr, testCases[2].int), [0, 1]);
    })
})