// Use the Rest Operator to help this function return an array of animals, 
// no matter how many animals are passed to it:
function collectAnimals(...animals) {  
    return animals;
}
console.log(collectAnimals("dog", "cat", "taumtaum", "mouse", "jackolope", "platypus"));  
// ["dog", "cat", "mouse", "jackolope", "platypus"]



// Make a food object with the array names as properties using Object Literals:
const fruit = ["apple", "pear"];  
const sweets = ["cake", "pie"];  
const vegetables = ["carrit"];
  const food = {fruit, sweets, vegetables};
        console.log(food);



// Use destructuring to fill in the blanks and use the property names as variables:    
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
    };
    //your code
    const {location, duration} = vacation;
    console.log(`\n\nWe're going to have a good time in ${location} for ${duration}`);



// Use destructuring to make this code ES6:
// const firstItem = items[0];  
// const [ firstItem ] = items;



// Write destructuring code to assign variables that will help us print the expected string.
//  Also, change the string to be using Template literals:
const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// your code
const [ firstFav, secondFav, thirdFav ] = favoriteActivitiesInOrder;
console.log(`\n\nMy top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`); 



                                //Blue Square



// Use the Rest and Spread Operator to help take any number of arrays, 
// and return one array. You will need to change how the arrays are passed in.
function combineAnimals() {  
    return [ ...realAnimals, ...magicalAnimals, ...mysteriousAnimals ];
}
const realAnimals = ["dog", "cat", "mouse"];  
const magicalAnimals = ["jackolope"];  
const mysteriousAnimals = ["platypus"];
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]



                                //Black Diamond


                                
// Try to make the following function more ES6xy:

// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];

//     return numbers.reduce(function(acc, number) {
//     return acc * number;
//     }, 1)
// }
// console.log(product());
const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1);


// Make the following function more ES6xy. 
// Use at least both the rest and spread operators:

function unshift(array, a, b, c, d, e) {  
  return [a, b, c, d, e].concat(array);
}


// const unshift = (array, ...args) => [ ...args, ...array];

// console.log(unshift());


                                //Double Black Diamond



// Write some destructuring code to help this function out. 
// Use object literals to simplify it:

populatePeople = names => names.map = name => name = name.split(" ");
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
}


// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]);
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]



