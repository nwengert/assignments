//      each one of these interact with an array somehow

        //filter
        //reduce   -reduces down to a single value
        //map       -not intuitive at all
        //sort      -sorts!
        //foreach


        //   FILTER

        
//We'll start with a filter function, designed to take an individual item from the array, returns index

    function filter(cb, arr) {                //cb is the function that will be called later.  Now we can abstract a lot of stuff
        //cb is designed to take a single item from the array, and its index as arguments
        // it will also return true or false
        // So each item gets tested, and if it passes, it gets passed into the new array
        var output = [];
        for(var i = 0; i < arr.length; i++) {
            var element = arr[i];
            //not put it through the test
            var passesTest = cb(element, i);
            if(passesTest) output.push(element);
        }
        return output;
    }

    var ints = [1,2,3,4,5,6,7,8,9,10];
    var misc = ['a, 4, true, false, {}, [], undefined'];  //this to use in challenge

    function testForEven(int){                          //can also take index, i
        return int % 2 === 0;
    }
                                                function testForOdd(int) {
                                                    return int % 2 !== 0;
                                                }
                                                //
    var evens = filter(testForEven, ints);

                                                var odds = filter(testForOdd, ints);
                                                //
    var oddIndexes = 


    console.log(evens);                                                  // returns [ 2, 4, 6, 8, 10 ]
                                                console.log(odds);       // break challenge  GOT IT!!







// NOW WITH BUILT IN JAVASCRIPT FILTER

var names = ['Ben', 'Maxx', 'Taylor', 'Chazzz', 'Nicole'];

var longNames = names.filter(function(name, i){            //you can just write an anonymous function in.  make the argument the SINGULAR form of the ARRAY
    return name.length > 3;
})

console.log(longNames);






/////    MAP
console.log('\n\n MAP');

    //it takes every element of the array and changes it to whatever the callback function returns

var lowerCaseLtrs = ['a', 'b', 'c', 'd'];
var capitalLtrs = lowerCaseLtrs.map(function(ltr){
    return ltr.toUpperCase();
})

console.log(capitalLtrs);

    //We'll use this a lot in React
    // Say we have an array of a bunch of raw objects and you want to display them on a page
            // you'd use a map function to add HTML/DOM elements, and append those to the body of the page

            //data in one form, gets processed, and becomes another form with MAP




//////   FOR EACH          ---this doesn't return anything.  for that you would want to map
console.log('\n\n  FOR EACH');

//literally means FOR EACH element, turn it into something

var nums = [1,2,3,4,5,6,7,8,9,10];

//i want to square each number

nums.forEach(function(num){
    console.log(num * num)
})


//SORT

var words = ['abc', 'bcd', 'cde', 'acdc'];
var alphabetizedWords = words.sort();

console.log(alphabetizedWords);

//the callback function returns a positive number, negative number, or zero

//suppose we want to sort this the opposite way
// we could just use .reverse on alphabetizeWords.

var nums = [1,6,7,3,7,9,8,2,1,5];
var lowToHiNums = nums.sort(function(num1, num2){   // needs to know two at a time, to kow if it should flip them or leave them be
    if(num1 - num2 > 0) return 1;
    if(num1 - num2 < 0) return -1;              //it only cares if it's positive, negative, or zero
    return 0;                               //num1 - num2 asks if num1 is greater than num2, andif so, to leave it there
});                                                 //you can do the opposite for descending

console.log(lowToHiNums);
                                                                    //strings have a method on them called localeCompare()
var alphabetizedReversed = names.sort(function(name1, name2){       // it compares two strings and returns a number whether the first letter should come before/after
    return name1.localeCompare(name2);
})
console.log(alphabetizedReversed)





//     REDUCE
console.log('          \nREDUCE');

        //sort and reduce are the odd men out, their callback functions look a bit different
        //   Reduce - uses three arguments
                    //  ACCUMULATOR - the value you're adding to, over time
                    // NUM
                    // INDEX - where you currently are in the loop


//it takes an array of things and condenses them into one value

var sum = nums.reduce(function(accumulator, num){
    //given each item in the array, how do we want the accumulator to be affected by it
     return accumulator += num;  //let it be equal to what it was before, plus the number
});
console.log(sum);

    // you can do cool statics stuff with Reduce

