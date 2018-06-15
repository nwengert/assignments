//Thursday June 14, 2018
// Unit Testing JavaScript - link in syllabus
//you can run your code in a safe environment  -- not in production, and give it 
//      a bunch of tests, to be sure that it'll pass them
function sum(x, y) {
    return x + y;
}
/// to test this you put in a bunch of stuff and make sure it's good
//  testing is doing this on a larger scale
//That's testing... 

//Unit Testing --- break your program up into units, and test them individually
        //It's much easier to debug a small isolated portion than the entire thing

//There are a lot of different testing frameworks out there, we'll learn two
// Mocha and Chai                   QA tester is a job title, they use this shtuff
        //Test-driven development, PHILOSOPHY
                                    // developing with the tests first in mind



//We're going to build a testing framework

//we need to make a few components for the testing library
//ASSERT
    //take two inputs, an expected value and an actual vale
    // and return true/false if they match
        //Actual value will be what our function or program actually outputs
        //expected value is what we're expecting it to be. 
    // it's up to us to define how they are or are not a match, like if they're identical, same data type, etc..
//DESCRIBE
    //Lets us call assert as many times as we need

    var assert = function(actual, expected){
        if(actual === expected){
            console.log({
                type: "Success", 
                    details: {
                    actual: actual, 
                    expected: expected
                }
            })
        }else{
            throw {
                type: "Fail",
                details: {
                    actual: actual,
                    expected: expected
                }
            }
        }
    }
//end of assert test

    function checkForValue(arr, item) {
        return arr.includes(item);
    }
    //First thing to do is to see how we can test this function

    var testCases = [
        { arr: [1,2,3,4,5], item: 6},
        { arr: [6,7,8,9,10], item: 8}
    ]

   

    //describe would allow us to group them together, to better see what's going on

    var describe = function(message, testFunc) {     //testFunc is a callback 
        console.log(message);
        try{
            testFunc();
        }catch(err){
            console.log(err);
        }
    }

    describe("Testing checkForValue", function () {
        assert(checkForValue(testCases[0].arr, testCases[]))
    });
    assert(  checkForValue(testCases[0].arr, testCases[0].item), false )
    assert(  checkForValue(testCases[1].arr, testCases[1].item), true )

    //I didn't get all the finalization of this, but the mocha and chai are supposed to be easier

    //usually testing is as easy as writing a few console.logs to determine if it works

    //from now on we'll be using this on all of our warmups. 


    //RECAP, GENERAL FLOW

    // for Test Driven Development,  TDD

    //1. Write the test first
    //2. run your tests witout inputs, to ensure they fail - no false positives
    //3. Write the program, with the test in mind. 
    //4. Run test, make sure test passes
    //5. Refactor/reorganize and improve if needed
    //6. Rinse and repeat


    // Another philosophy  --   BDD
                                // Behavior Driven Development
    //There's nothing mechanically different
    //The difference is in how it is written, BDD is more symantically
    //TDD is more for the software itself

    //Assert library - for TDD
    //Expect/Should Library - BDD,   reads almost like english. 