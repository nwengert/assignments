// Write a function that takes an array as a parameter and returns
//  a new array with the contents randomly "shuffled".


//stuff i was trying

// const shuffle = arr => {
//     // pull a random index from the Array
//     // pull from the right and left of that until you have the whole thing
//     num = Math.floor(Math.random()* arr.length);
//     let newArray = [];
//     while(arr.length > )

//     return newArray
// }


//this one is destructive
const shuffle = arr => {
    const output = [];
    while(arr.length){
        const randomIndex = Math.floor(Math.random() * arr.length);
        output.push(arr.splice(randomIndex, 1)[0]);
    }
    return output;
}

const unsort = arr => {
    const output = Array(arr.length);
    for( let i = 0; i < arr.length; i++){
        let randomIndex = Math.floor(Math.random() * arr.length);
        while(output[randomIndex] !== undefined) {
            randomIndex= Math.floor(Math.random() * arr.length);
        }
        output [randomIndex] = arr[i];
    }
    return output;
}

const desort = arr => {
    return arr.sort((a, b) => Math.floor(Math.random() * 3) - 1);
}




console.log(desort([1,2,3,4,5,6,7,8,9]));