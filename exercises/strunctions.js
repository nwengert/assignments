// Implement all of the listed String Methods
//  below using at least 3 unique Functions.
    // .concat()
    // .indexOf()
    // .lastIndexOf()
    // .match()
    // .replace()
    // .slice()
    // .split()
    // .toLowerCase()
    // .toUpperCase()
    // .substr()

var primero = function(str, sstr) {
    return str.concat(' Jacob ', sstr, ' Schmidt ');
}

    var fullName = primero('John', 'Jingleheimer')
    console.log(fullName);

var mayusculas = function(str) {
    return str.toUpperCase();
}

var thirdFunction = function() {
    var yell = mayusculas(fullName);
    var whisper = yell.toLowerCase();
    var first = whisper.replace(whisper.slice(whisper.indexOf('jacob'),whisper.indexOf('jingle')), 'name ');
    var second = first.replace(first.slice(0,first.indexOf('name')), 'His ');
    var third = second.replace('jingleheimer', 'is my name');
    var fourth = third.replace(third.slice(third.indexOf('schmidt')),'too!');
}

console.log(thirdFunction());
