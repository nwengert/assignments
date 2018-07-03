// Check Data Types
// Given a multi-dimensional array containing only primitive data types (strings, booleans, and numbers), write a function that returns whether EACH element within each subarray belongs to the same data type.

const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]  
const multiD2 = [[true,false,true],[false,false,true]]  

// const checkTypes = arr => {
//     for(let i = 0; i < arr.length; i++) {
//         if(typeof (arr[i][i]) === typeof (arr[i + 1][i])) {
//             console.log(arr[i][i] + ' ' + arr[i + 1][i]);
//             return true;
//         } else {                                 this is what Max came up with too.  
//             return false;
//         }
//     }
// }

// console.log(checkTypes(multiD2));

// console.log(multiD1[0][0]);

const checkTypes = arr => {
    const dataType = typeof arr[0][0];
    return arr.every(subArr => subArr.every(element => typeof element === dataType));
  }