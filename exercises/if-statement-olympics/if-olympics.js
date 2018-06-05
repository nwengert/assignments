// preliminaries

if (5 > 3) {
    console.log("is greater than")
}
var cat = 3;
if (cat === 3) {
    console.log("is the length");
}
if ("cat" === "dog") {
    console.log ("same")
}else {
    console.log ("not the same")
}

// bronze medal

var person = {
    name: "Benjamin",
    age: 22,
}

if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is NOT allowed to go to the movie")
}

var firstLetter = person.name.charAt(0);
console.log(firstLetter)

if (firstLetter == "B") {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is NOT allowed to go to the movie, because his name doesn't start with B");
}

if (firstLetter == "B" && person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie, because name starts with B and older than 18.");
} else {
    console.log(person.name + " is NOT allowed to go to the movie, because his name doesn't start with B");
}

// silver medal

if (1 === "1") {
    console.log ("strict")
} else if (1 == "1") {
    console.log ("loose")
} else {
    console.log ("not equal at all");
}

if ( 1 <= 2 && 2 === 4) {
    console.log("yes")
} else {
    console.log("nope")
}

// gold medal

    // check to see if "dog" is a string
var dog = "dog"
console.log(typeof(dog)+ ' is a string')

    // check to see if "true" is a boolean
var dog = true
console.log(typeof(dog) + ' is a boolean')

// // check to see if a variable has been defined or not
var x;
if (x === undefined) {
    txt = "x is undefined";
} else {
    txt = "x is defined";
}
console.log(txt);

// 4. Write an if statement comparing letters to numbers using < and >. 
// Try to figure out what letters are going to be "greater than" other numbers or letters. 
// For example: is "s" greater than 12?
var letra = 's';
var numero = 1;
if (letra > numero) {
    console.log('Letter is greater than Number');
} else {
    console.log('twerent true')
}
        // Ternary!!!
console.log((letra > numero)? 'Letter is greater than Number' : "twerent true");

// 5. Write a ternary statement that console.logs whether a number is odd or even. For example:
var miNumero = 22;
console.log((miNumero % 2)? 'number is odd' : 'number is even');
























// Even/Odd Looping

// for(var i = 0; i < 100; i++) {
//     if(i % 2) {
//         console.log(i, "Odd");
//     } else {
//         console.log(i, "Even");
//     }
// }

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]  

// var count = 0
// for (var i = 0; i<officeItems.length; i++) {
//    if (officeItems[i] === "computer") {
//         count++;
//    }
// }
// console.log("number of computers is " +count);





// var people = [  
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 


//   for (var i = 0; i < people.length; i++) {
//     if (people[i].age >= 18 && people[i].gender === "male") {
//         console.log(people[i].name, "is old enough to see Mad Max, let him go!")
//     } else if (people[i].age < 18 && people[i].gender === "male"){
//         console.log(people[i].name, "is NOT old enough to see Mad Max, DON'T let him go!")
//     } else if (people[i].age >= 18 && people[i].gender === "female"){
//         console.log(people[i].name, "is old enough to see Mad Max, let her go!")
//     } else if (people[i].age < 18 && people[i].gender === "female") {
//         console.log(people[i].name, "is NOT old enough to see Mad Max, DON'T let her go!")
//     }
// }

