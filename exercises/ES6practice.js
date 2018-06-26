// Let and Var

// Use let and const and try to use these new features
// Replace all the vars with let and const
// John is the pet owner, and his name should be stored differently than the other names.

// const name = 'John'  
// let age = 101  
// const pets = ["cat", "dog"]

// var petObjects = []

// for (let i = 0; i < pets.length; i++){  
//   const pet = {type: pets[i]}
//   if (pets[i] === "cat"){
//     const name = "fluffy"
//   } else {
//     const name = "spot"
//   }
//   pet.name = name
//   petObjects.push(pet)
// }

// Fat arrow functions.
// re-write this .map() using a fat arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function,
//  and not starting an object, so the : will be an unexpected symbol.


// const vegetables = carrots.map(function(carrot){  
//     return {type: "carrot", name: carrot}
// })

                  // const vegetables = carrots.map((carrot) => ({type: "carrot", name: carrot}));


// friends = people.filter(function(person){  
//   return !!person.friendly
// })

                  // const friends = people.filter(person) => ({!!person.friendly}));




//              re-write the following functions to be fat arrow functions:

// function doMathSum(a, b){  
//     return a + b
// }

                  // const doMathSum = (a, b) => a + b;

                  // console.log(doMathSum(12, 32));




// var produceProduct = function(a, b){  
//     return a * b
// }

                  // const produceProduct = (a, b) => a * b;

                  // console.log(produceProduct(4, 11));



// write a functions that takes a firstName, a lastName, an age and returns a string like the following: 
// Hi Kat Stark, how does it feel to be 40?

// firstName should default to "Jane" 
// lastName should default to "Doe" 
// age should default to 100

const makeSentence = (firstName = "Jane", lastName = "Doe", Age = 100) => console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${40}?`);

makeSentence();



// Use the shorthand syntax to make the following code block take up one line.              
// const dogs = animals.filter((animal)=>{  
//   if (animal.type === "dog"){
//     return true
//   } else {
//     return false
//   }
// })

//                  const dogs = animals.filter((animal) => (animal.type === "dog") ? "valid" : "invalid");



// Write a function that will take location and name and output this if location="Hawaii" and name="Janice":

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.  
// If you didn't do that with Template Literals, do it now with Template Literals.

const hawaiiTemplate = (location, name) => console.log(`\n\nHi ${name}!\n\nWelcome to Hawaii.\n\nI hope you`+
      ` enjoy your stay.  Please ask the president of ${location} if you need anything.`);

      console.log(hawaiiTemplate('Hawaii', 'Janice'));