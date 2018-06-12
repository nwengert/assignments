// RANDOM PASSWORD GENERATOR

// Write a function that generates a random password including uppercase, 
// lowercase, numeric, and symbol characters. The function should accept
//  an integer as it's only argument, and that integer is how long the password should be.


//this was from the internet
// var genPW = function(x) {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*.?|{}`~";
//     for (var i = 0; i < x; i++);
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     return text;
// }

// console.log(genPW(6));

// var makePW = function(x) {
//     var myArr = [];
//     for (var i = 0; i = x; i++) {
//         var character = Math.floor(Math.random() * 126);
//         if (character < 33) {
//             character += 33;
//         }
//         myArr.push(String.fromCharCode(character));
//     }
//     return myArr.join("");
// }
// console.log(makePW(7));




// console.log(String.fromCharCode(33));
// var x = 6
// console.log(String.fromCharCode(Math.floor(Math.random)) * x);

// console.log(Math.floor(Math.random()* 7));




//THIS WORKS
let generator = function (x) {
    let pw = ""
    for (let i = 0; i < x; i++) {
        let character = Math.floor(Math.random() * (126-33)) + 33

    pw += String.fromCharCode(character);
} 
    return pw;
}

console.log(generator(3));