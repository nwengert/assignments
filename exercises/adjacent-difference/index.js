// Adjacent Difference
// Given an array of strings, find the 3 adjacent elements with the longest combined length. 
// Return them in the form of an array.

const inputArray = ["this", "is", "an", "array"];
const myArray = [];

// const combined = function(){
//     for(let i = 0; i < inputArray.length - 3; i++){
//         if((inputArray[i].length + inputArray[i + 1].length + inputArray[i + 2].length) < (inputArray[i + 1].length + inputArray[i + 2].length + inputArray[i + 3].length)){
//             myArray.push(inputArray[i + 1]);
//             myArray.push(inputArray[i + 2]);
//             myArray.push(inputArray[i + 3]);
//         }else{
//             myArray.push(inputArray[i + 1]);
//             myArray.push(inputArray[i + 2]);
//             myArray.push(inputArray[i + 3]);
//         }
//     }
//     return myArray;
// }

// const reducer = function() {

// }


function difference(arr) {
    if(arr.length < 3) {
        console.log("This array must be longer");
    } else {
        var answer = []
        var x = 0
        var final = (arr[0].length + arr[1].length + arr[2].length);
        for(k = 0; k < arr.length - 3; k++) {
            if (final < (arr[k+1].length + arr[k+2].length + arr[k+3].length)) {
                final = (arr[k+1].length + arr[k+2].length + arr[k+3].length);
                x = k;
            } else {
            }
        }
        answer.push(arr[x+1], arr[x+2], arr[x+3])
        console.log(answer)
    }
}

difference(["This", "is", "an", "array"])

module.exports = difference;
