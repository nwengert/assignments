// Use the built-in .reduce() method on arrays to solve all of these problems



// 1) Turn an array of numbers into a total of all the numbers
    //this method returns the accumulator
console.log("\n\n\t1. Total of all the numbers in an array.  --DONE")

function total(arr) {
    return arr.reduce(function(accumulator, element){
        return accumulator + element;
    })
}
console.log(total([1,2,3])); // 6 







// 2) Turn an array of numbers into a long string of all those numbers.
console.log('\t2. Array to string of numbers')
function stringConcat(arr) {
    arr.join('+');
}

console.log(stringConcat([1,2,3])); // "123" 


// 3) Turn an array of voter objects into a count of how many people voted

console.log("\n\n\t 3. Count of how many people voted --DONE")

function totalVotes(arr) {
 return arr.reduce(function(accumulator, voter){
    if(voter.voted) return accumulator + 1;
    return accumulator;
 }, 0);    //set default accumulator value
}

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7  



// 4) Given an array of all your wishlist items, figure out 
// how much it would cost to just buy everything at once
console.log('\n\n\t4. How much cost to buy everything at once. --DONE')

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];


var shoppingSpree = wishlist.reduce(function(accumulator, item){
    return accumulator + item.price;
},0);

console.log(shoppingSpree); // 227005 





// 5) Given an array of arrays, flatten them into a single array
console.log('\n\t5. Concat several arrays into one. --DONE')

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

var flatten = arrays.reduce(function(accumulator, array){
    return accumulator.concat(array);
},[])

console.log(flatten);



// 6) Given an array of potential voters, return an object representing the results of the vote
    // Include how many of the potential voters were in the ages 18-25, how many from 26-35, 
    // how many from 36-55, and how many of each of those age ranges actually voted. 
    // The resulting object containing this data should have 6 properties. 
    // See the example output at the bottom.

console.log("\n\n\t6. vote results  --DONE");
var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const countVotes = voters => {
    const initialValue = { 
        'youngVotes': 0,
        'youth': 0,
        'midVotes': 0,
        'mids': 0,
        'oldVotes': 0,
        'olds': 0 
      };
    return voters.reduce((accumulator, voter) => {
        if(voter.age > 17 && voter.age < 26){
            accumulator.youth++;
            if(voter.voted) accumulator.youngVotes++;
        }
        if(voter.age > 25 && voter.age < 36){
            accumulator.mids++;
            if(voter.voted) accumulator.midVotes++;
        }
        if(voter.age > 35 && voter.age < 56){
            accumulator.olds++;
            if(voter.voted) accumulator.oldVotes++;
        }
        return accumulator;
    }, initialValue)
}

console.log(countVotes(voters));

