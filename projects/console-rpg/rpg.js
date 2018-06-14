var rs = require("readline-sync");
var name = rs.question('Welcome! What is your name?');

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
    var isWalking = rs.question('Press W to begin walking');
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