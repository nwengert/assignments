
// Write a function that returns the missing number from an unsorted array of numbers.


arr = [3,5,4,8,1,2,7];
var differenceArr = [];

function findMissingNo(arr){
    //sort the numbers in ascending order
    var sorted = arr.sort(function(a,b){
        return a - b;
    })
    //check for gaps
        //loop through arr
        //check if theres more thana difference of 1 between two given elements
        for(var i = 0; i < sorted.length; i++){
            if(sorted[i] - sorted[i + 1] !== -1){
                return sorted[i] + 1;
            }
        }
}

console.log(findMissingNo(arr));
console.log(differenceArr);


module.exports = findMissingNo;



