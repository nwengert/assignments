// how to write a test

const twoSum = (arr, int) => {
    //get the value of the first number in the array
    //loop through the rest of the array to see if it will sum to 4
    //push those indexes into a new array
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] + arr[i] === int){
                return [i, j];
            }
        }
    }
    return false;
}

console.log(twoSum([1,2,3], 4));

module.exports = twoSum;
