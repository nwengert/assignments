var getFreq = function(str) {
    var output = {};
    var removedChars = "";
    for (var i = 0; i < str.length; i++) {
        var character = str.charAt(i);   //str[i] means same thing
        if (output[character]) {
            output[character]++;
        }else{
            output[character] = 1;
            removedChars += character;
        }
    }
    const sortedArray = [];
    // to make descending order sorted - 
    // loop through each key/value pair and
    //  add separate objects to the array
    for (var key in output) {
        sortedArray.push({ [key]: output[key] })
    }
    return sortedArray.sort(function(obj1, obj2) {
        var key1 = Object.keys(obj1)[0];
        var key2 = Object.keys(obj2)[0];
        return obj2[key] -obj1[key1];
    })
    return {
        count: output,
        removed: removedChars
    };
}
console.log(getFreq('slimy smelly solution'));

