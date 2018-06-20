// actual programgoes here


str = "I madam, I made radio! So I dared! Am I mad?? Am I?!";


            //this is the crap that i did

// function palindromeFinder(str){
//     var myStr = str.toLowerCase();
//     for (var i = 0; i < myStr.length; i++){
//         //clear the string of special characters
//         if(myStr[i].charCodeAt < 97 || myStr[i].charCodeAt > 122){
//             //change character to ""
//             myStr.replace(myStr[i], "");
//         }
//         var myStrReversed = myStr.split("").reverse().join("");
//         //determine if mySTrReversed is the same as backwards myStr
//         if(myStr[i] = myStrReversed[myStrReversed.length + 1 - i]){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// console.log(palindromeFinder());

function palindromeFinder(str){
    var rmvChar = str.toLowerCase().replace(/[^a-z]/g, "");
    for (var i = 0; i < rmvChar.length / 2; i++){
        if(rmvChar[i] !== rmvChar[rmvChar.length - 1 - i]) return false;
    }
    return true;
}

console.log(palindromeFinder(str));

module.exports = palindromeFinder;