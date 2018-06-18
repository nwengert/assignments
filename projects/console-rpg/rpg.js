var rs = require("readline-sync");

console.log('\n\n\n\nA radioactive comet has caused many woodland creatures to become severely mutated.'+
            '\nEven some humans have become ghastly deformed and dangerous,'+
            '\nbut all you want is to get over the river and through the woods, to visit your grandma.')
var name = rs.question('\n\n\tGood luck! \n\n\tWhat is your name?    ');
console.log('\n\n\n\n'+ name + ', you are only able to carry one of the following items...')

var startingItems = ['apples so that Grammy can make some delicous pie!', 
                    'your lucky machete', 
                    'a walking stick'];
var startingSelection = rs.keyInSelect(startingItems, name+ " Please choose.  ");

if (startingSelection === 0) {
    console.log('\n\nYou\'re taking apples! You will get to make the trip back on a full belly!')
    // add apples to person.items
}
if (startingSelection === 1) {
    console.log('\n\nYYou chose to borrow Chancho\'s lucky machete.');
    // add to items
}
if (startingSelection === 2) {
    console.log('\n\nYYou chose a walking stick.  Not a bad choice!');
    // add to person.items
}
if (startingSelection === -1) {
    console.log('\n\nSo you don\'t want anything to do with any of this ay?'+
                '\nWell, Grammy needs visiting, so get along your way!  \n\n\tWithout \n\n\t\tany \n\n\t\t\titems...')
}
var player = {
    name: name,
    hp: 100,
    items: [],
    enemiesKilled: 0
}

var Enemy = function(name, hp) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
}

function checkForEnemy(){

}

function genRandomEnemy() {
    var names = ['Dragon', 'MewTwo', 'Your Mom'];
    var hp = 100;
    var attack = 10;
    return new Enemy(names[Math.random() * names.length], hp, attack);
}
// DO THINGS IN SMALL CHUNKS, ONE STEP AT A TIME

var win = false;

while(true){
    var isWalking = rs.question('Press W to begin walking    ');
    //see whether there is an enemy
        // if false continue looping

        // if true generate enemy
            // select run or fight
                // if run deal possible damage
                // if fight start fight sequence
                    // check hit points of the player and enemy to see who wins
                        // if player hp is < 1, break out of game and lose
                        // if enemy hp is < 1, then earn an item and add to kills, and continue to top of loop

}
if (win) {
    console.log("You won!");
}else{
    console.log("You suck!!");
}