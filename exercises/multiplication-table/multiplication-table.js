// Multiplication Table
// 05 JULY 2017
// Warm-up
// Write a function the generates a 10 X 10 multiplication table (2D array).

// For example:

// multTable();  
// //returns
// [
//     [1,2,3,4,5...],
//     [2,4,6,8,10...],
//     [3,6,9,12,15...],
// ...
// ]


//         //This is what I made
// const multTable = () => {
//     //create an array of 10 arrays
//     const myArray = [ [],[],[],[],[],[],[],[],[],[] ]
//     //create a loop from 1 to 10 that will push i * table into that particular array
//     for (i = 1; i < 11; i++) {
//         myArray[0].push(i * 1);
//         myArray[1].push(i * 2);
//         myArray[2].push(i * 3);
//         myArray[3].push(i * 4);
//         myArray[4].push(i * 5);
//         myArray[5].push(i * 6);
//         myArray[6].push(i * 7);
//         myArray[7].push(i * 8);
//         myArray[8].push(i * 9);
//         myArray[9].push(i * 10);
//     }
//     return myArray;
// }




const multTable = () => {
    //create an array of 10 arrays
    const myArray = [ [],[],[],[],[],[],[],[],[],[] ]
    //create a loop from 1 to 10 that will push i * table into that particular array
    for (let i = 1; i < 11; i++) {
        for(let y = 1; y < 11; y++){
            myArray[y].push(i * y);
        }
    }
    return myArray;
}


console.log(multTable());

module.exports = multTable;