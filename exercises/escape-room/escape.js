var rs = require("readline-sync");

var name = rs.question("\n\n\tWhat is your name? "); 
console.log('\n\n\nHello '+ name + '. \nYou have been locked in a room. \nIn order to escape, you need to find the key and open the door.\n');   
console.log('The room is dark, and you find it difficult to discern your surroundings.'+
            '\nYou feel along a wall until you come across a hole wide enough for your arm to fit.');
if(rs.keyInYN('\n'+ name + ' Do you reach into the hole?')) {
    console.log('\n\n You were bit by something, and die slowly\n\n');
}else{
    console.log('\n\nYou are smart.  Only idots would reach in there!\n\n');
}
var gotKey = false;

console.log('\n\nYou still need to find that key!');
var options = ['keep feeling along the wall',
                 'try another wall', 
                 'feel around on the floor', 
                 'start screaming'];
index = rs.keyInSelect(options, 'Which option do you choose?');
console.log('Ok, you chose to '+ options[index]+ '\n\n');
switch(options[index]) {
    case 1:
        console.log('The first hole was just a precursor to a larger hole\n'+
                'which you fall in to, and die.');
    case 2:
        console.log('You feel your way toward another wall\n'+
                    ' but trip over a shoe on the way');
    case 3:
        console.log('You crouch onto the floor and feel around\n'+
                ' until you come across what seems to be a shoe.');
    case 4:
        console.log('Your screams awaken the demons living in the hole you found.\n'+
                ' They come out and kill you.');
}

