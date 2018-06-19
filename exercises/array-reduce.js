// Use the built-in .reduce() method on arrays to solve all of these problems



// 1) Turn an array of numbers into a total of all the numbers
    //this method returns the accumulator
console.log("\n\n\t Total of all the numbers in an array.")

function total(arr) {
    return arr.reduce(function(accumulator, element){
        return accumulator + element;
    })
}

console.log(total([1,2,3])); // 6 







// 3) Turn an array of voter objects into a count of how many people voted

console.log("\n\n\t Count of how many people voted")

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




// 6) Given an array of potential voters, return an object representing the results of the vote
    // Include how many of the potential voters were in the ages 18-25, how many from 26-35, 
    // how many from 36-55, and how many of each of those age ranges actually voted. 
    // The resulting object containing this data should have 6 properties. 
    // See the example output at the bottom.

console.log("\n\n\t vote results");

function voterResults(arr) {
    return arr.reduce(function(accumulator, voter){
        //check age of voter
        // add one to the age group it belongs in on the accumulator
        // return the newly updated acumnulator
    }, {
        "18-25": 0,
        "26-35": 0,
        "36-55": 0
    })
}