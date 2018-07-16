// 1) Make an array of numbers that are doubles of the first array
console.log('\n\tDouble the numbers of the first array\n')
var firstNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var doubledNumbers = firstNumbers.map(function(number){
    return number * number;
})
console.log(doubledNumbers);

// 2) Take an array of numbers and make them strings
console.log('\n\tMake array of numbers into strings');
var numbahs = [2, 5, 100];
var stringItUp = numbahs.map((x)=>{
    return x.toString();
})
console.log(stringItUp);

// 3) Capitalize each of an array of names
console.log('\n\tArray of names in proper case')
var names = ["john", "JACOB", "jinGleHeimer", "schmidt"];
var capitalizeNames = names.map(function(name){
    var firstLetter = name[0].toUpperCase();
    var rest = name.slice(1).toLowerCase();
    return firstLetter + rest;
})
console.log(capitalizeNames);

// 4) Make an array of strings of the names
console.log('\n\tPull names from object into array')

var peopleObject = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
var namesOnly = peopleObject.map(function(person){
    return person.name;
})
console.log(namesOnly);

// 5) Make an array of strings of the names 
// saying whether or not they can go to The Matrix
console.log('\n\tSay whether or not they can to to The Matrix')
var nameCanGo = peopleObject.map(function(person){
    if(person.age >= 18) {
        return (person.name + ' can go to The Matrix');
    }else{
        return (person.name + ' is under age!');
    }
})
console.log(nameCanGo);

// 6) Make an array of the names in h1s, and the ages in h2s
console.log('\n\tArray with names in h1s and ages in h2s');
var htmlReady = peopleObject.map(function(person){
    return ('<h1>'+ person.name+'</h1><h2>'+ person.age +'</h2>');
})
console.log(htmlReady);




// gf