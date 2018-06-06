// Side Notes ----->   JavaScript is NOT an object-oriented language.  It's a prototypical inheritance language


// var arr = [1, 2, 3, 'abc'];

//ADDING DATA
    // arr[2] = true;
    // arr.push
    // arr.unshift
    // arr.splice 

//REMOVING DATA
    // arr.shift
    // arr.pop
    // arr.splice


// Destructive array methods
    //splice  - lets you add things to a specific position of an array, returns a new array. 
    // push and pop
    // shift and unshift

//slice returns selected elements in an array, as a new array object. 

var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 
 
// 1. Remove the last item from the vegetable array.
// 2. Remove the first item from the fruit array.
// 3. Find the index of "orange."
// 4. Add that number to the end of the fruit array.
// 5. Use the length property to find the length of the vegetable array. Log that to the console.
// 6. Add that number to the end of the vegetable array.
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// 8. Remove 2 elements from your new array starting at index 4 with one method.
// 9. Reverse your array.

// Log your array as a string to the console.
// If you've done everything correctly, the last step should print the following to the console:

// 3,pepper,1,watermelon,orange,apple 

console.log('fruit =',fruit);
console.log('vegetables = ',vegetables);

console.log(1, vegetables.pop());
console.log('vegetables array',vegetables);
console.log(2, fruit.shift());
console.log(fruit);
console.log(3, 'index of orange =', fruit.indexOf('orange'));
console.log(4, fruit.push(fruit.lastIndexOf('orange')));
console.log(fruit);
console.log(5, 'length of vegetable array =', vegetables.length);
vegetables.push(vegetables.length);
console.log(6, vegetables);
var food = fruit.concat(vegetables);
console.log(7, 'food array = ', food);
console.log(8, food.splice(4,2));
console.log(food);
console.log(8, food.reverse());