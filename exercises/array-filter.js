// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

//DONE
var numbers = [3, 6, 8, 2];
var newNumbers = numbers.filter(function(number){
    return number >= 5;                 
})
console.log(newNumbers);

        //But how to make it fit into this?
        // function fiveAndGreaterOnly(arr) {

        // }

        // fiveAndGreaterOnly([3, 6, 8, 2]);


// 2) Given an array of numbers, return a new array that only includes the even numbers.

//DONE
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var nuevoNumeros = numeros.filter(function(numero){
    return !(numero % 2);
})
console.log(nuevoNumeros);

// 3) Given an array of strings, return a new array that only includes 
// those that are 5 characters or fewer in length

//DONE
var animals = ["dog", "wolf", "by", "family", "eaten", "camping"];
var newAnimals = animals.filter(function(animal){
    return animal.length <= 5;
})
console.log(newAnimals);

// 4) Given an array of people objects, return a new array that has 
// filtered out all those who don't belong to the club.

            var people = ([  
                {
                    name: "Angelina Jolie",
                    member: true
                },
                {
                    name: "Eric Jones",
                    member: false
                },
                {
                    name: "Paris Hilton",
                    member: true
                },
                {
                    name: "Kayne West",
                    member: false
                },
                {
                    name: "Bob Ziroll",
                    member: true
                }
            ]);
var clubMembers = people.filter(function(person){
    return person.member === true;
})
console.log(clubMembers);



console.log('\n\n')
// 5) Filter out all the people who are not old enough 
// to see The Matrix (younger than 18)

var gente = ([  
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
        age: 18
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);

var canSeeIt = gente.filter(function(person){
    return person.age >=18;
})
console.log(canSeeIt);