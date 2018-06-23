// Let and Var

// Use let and const and try to use these new features
// Replace all the vars with let and const
// John is the pet owner, and his name should be stored differently than the other names.

const name = 'John'  
let age = 101  
const pets = ["cat", "dog"]

var petObjects = []

for (let i = 0; i < pets.length; i++){  
  const pet = {type: pets[i]}
  if (pets[i] === "cat"){
    const name = "fluffy"
  } else {
    const name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

// Fat arrow functions.
// re-write this .map() using a fat arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function,
//  and not starting an object, so the : will be an unexpected symbol.

const vegetables = carrots.map(function(carrot){  
    return {type: "carrot", name: carrot}
})

const vegetables = carrots.map(function(carrot){  
    return {type: "carrot", name: carrot}
})

