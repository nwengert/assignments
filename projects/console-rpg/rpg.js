var rs = require("readline-sync");

console.log('.'+'\n  .'+'\n    .'+'\n      .'+'\n        .'+'\n          .'+
            '\nA radioactive comet has caused many woodland creatures to become severely mutated.'+
            '\nEven some humans have become ghastly deformed and dangerous,'+
            '\nbut all you want is to get over the river and through the woods, to visit your grandma.')

var name = rs.question('\n\n\tGood luck!'+
                        '\n\n\tWhat is your name?    ');

 /////
 ////
 ///
 //                       
console.log('\n\n\n\n'+ name + ', you are only able to carry one of the following items...')
var startingItems = ['sack of a dozen apples', 
                    'Chancho\'s lucky machete', 
                    'a walking stick'];
var startingSelection = rs.keyInSelect(startingItems, name+ " Please choose.  ");
/////
////
///
//
if (startingSelection === 0) {
    console.log('\n\nYou\'re taking apples! Grammy will be very happy to get to make one of her famous apple pie!'+
                '\n And you\'ll make the trip back on a full belly!'+
                '\n\t OR... they may come in handy while fighting enemies.');
    // add apples to person.items
}
if (startingSelection === 1) {
    console.log('\n\nYou chose to borrow Chancho\'s lucky machete.');
    // add to items
}
if (startingSelection === 2) {
    console.log('\n\nYou chose a walking stick.  Not a bad choice!');
    // add to person.items
}
if (startingSelection === -1) {
    console.log('\n\nSo you don\'t want anything to do with any of this ay?'+
                '\nWell, Grammy needs visiting, so get along your way!  \n\n\tWithout \n\n\t\tany \n\n\t\t\titems...')
}
//////
/////
////   GENERATE THINGS
///
//


function genHp(){
    return Math.floor(Math.random() * 11) + 90;
}
function genAttackPower(){
    return Math.floor(Math.random() * 11) + 20;          // it ill always be 20, with potential to be 30
}
function genDamage(){
    return Math.floor(Math.random() * 11) + 5;             // a little damage, because they're unhealthy mutated forest dwellers
}

////
///   enemy
//
var possibleEnemyNames = ["Yoyo", "ChupaCabra", "FangHorn", "Duende", "Demigorgon", "Karen"];
genEnemyNames = function() {
    return possibleEnemyNames[Math.floor(Math.random()*6)];
}
////
///
//
var player = {
    name: name,
    hp: 100,
    attack: genAttackPower(),
    items: {startingSelection},
    enemiesKilled: 0
}
function GenRandomEnemy() {
    this.enemyName = genEnemyNames();
    this.hp = genHp();
    this.attack = genAttackPower();
    this.damage = genDamage();                      //because no woodland mutated creature is 100% healthy
    return({enemyName, hp, attack, damage});
}

// DO THINGS IN SMALL CHUNKS, ONE STEP AT A TIME

var thereIsEnemy = false;
var fightOptions =["RUN FOR IT!", "STAND AND FIGHT!"];

///////
//////
/////    START  WALKING 
////
///
//


var isWalking = rs.question('\nPress \'w\' to take your first steps into the woods.' +
                            '  Be wary of what might be lurking out there!    ', { limit: "w", limitMessage: "Wrong key!"});


while (!thereIsEnemy) {
    if((Math.floor(Math.random()* 100)) < 75) {  //there is no enemy
        thereIsEnemy = false;
        // make 'keep walking' phrases selected at random, so that the same one doesn't repeat continuously. 
        console.log('\n  Turns out there is nothing out there, for now...');

        var isWalking = rs.question('Press \'w\' to resume walking    ', { limit: "w", limitMessage: "Wrong key!"});
    
    }else{
        thereIsEnemy = true;
        console.log('.'+'\n  .'+'\n    .'+'\n      .'+'\n        .'+'\n          .'+
                    '\nThere is something, and it\'s coming for you!  \n\n\tGet ready to fight!');
        //generate enemy
        var newEnemy = GenRandomEnemy();
        //describe the enemy
        console.log('\nYou are able to see that it is a '+ newEnemy.enemyName + ' coming after you. ' +
                    '\n\t(hp = '+ newEnemy.hp + ', current attack power = '+ newEnemy.attack+ ')');
        //decide to fight or run
        var fightSelection = rs.keyInYN('\n'+ name + ", do you wish to fight?  ");
        if(fightSelection) {                // player chose to fight
                console.log('.'+'\n  .'+'\n    .'+'\n      .'+
                            '\n'+ name + ' is a fighter, not afraid of this puny '+ newEnemy.enemyName+ '.')
                //Start fight sequence. 
                newEnemy.attack = genAttackPower();
                if(player.attack !== 100) {                 //no new player.attack if powered to 100 by apples
                    player.attack = genAttackPower();
                }
            while(newEnemy.hp > 0 && player.hp > 0){                           // keep fighting as long as both are alive
                console.log("\n\nThe " + newEnemy.enemyName + " strikes.");
                player.hp -=  newEnemy.attack;
                if(player.hp < 0) {
                    console.log('   And that was the end of you. \nYou gave it all you could.  \nComet radiation enhanced woodland creatures just arent your thing.'+
                                '\n\n\t\t YOU DIED.\n\n\t\tRIP ' + name + '\n\n');
                    break;
                }
                console.log('\t' + name + ' hp: ' + player.hp);
                console.log("You strike back with everything you can muster.")
                newEnemy.hp -= player.attack;
                if(newEnemy.hp < 0){
                    console.log('And that was the blow that brings down the '+ newEnemy.enemyName + '!'+
                                '\n' + name + ' with a '+ startingItems[startingSelection] + ' is unstoppable!'+
                                '\n\n\tSo far at least...');
                    player.enemiesKilled++;
                    // break;
                }
                console.log('\t' + newEnemy.enemyName + ' hp: ' + newEnemy.hp);
                var isFighting = rs.question('Press \'f\' to resume the fight    ', { limit: "f", limitMessage: "Wrong key!"});
                // if the item selected was APPLES
                if(startingSelection === 0 && player.hp < 35) {  // if player is close to dying, but has a bag of apples!
                    console.log('.'+'\n  .'+'\n    .'+'\n      .'+
                                '\n\nYou are having a difficult time!  Current hp is ' + player.hp +
                                '\nBUT...  There might be something you can do!'+
                                '\nPerhaps one of those apples could help your dire situation.')
                    var appleChoice = ['Throw one of your apples at the ' + newEnemy.enemyName, 
                                        'Hide from the ' + newEnemy.enemyName + ' long enough to eat one of the apples',
                                        'Do nothing with the apples, Granny would kill you faster than the '+ newEnemy.enemyName];
                    var appleSelection = rs.keyInSelect(appleChoice, name + ', decide what to do with your apples.')
                    if(appleSelection === 0){
                        console.log('.'+'\n  .'+'\n    .'+'\n      .'+
                                    '\n\nYou grab one of your shiny apples, wind up and hurl it towards the '+ newEnemy.enemyName +
                                    ',\nwhich snatches it right out of the air and gulps it down without chewing!' +
                                    '\nYou stand mesmerized as the creature suddenly grows is size and strength,'+
                                    '\n\tuproots a nearby tree,\n\t\tand after raising it high in the air'+
                                    '\n\n\t\t\tsmashes you into the ground.'+
                                    '\n\nYOU DIED.    RIP '+name+'\n\n');
                        break;
                    }
                    if(appleSelection === 1){
                        console.log('.'+'\n  .'+'\n    .'+'\n      .'+
                                    '\nYour last attack left the '+ newEnemy.enemyName + ' dazed enough for you to now sneak away for a moment'+
                                    '\nYou reach into your bag and pull out one of Grammy\'s apples, hoping for anything to give you back an advantage.'+
                                    '\nYou chow down ravenously, and while some juice dribbles down your chin you feel your body regain strength.'+
                                    '\n\tNo, wait...'+
                                    '\nYou\'re not just regaining strength, but it is exceeding anything you\'ve ever felt before!'+
                                    '\n\nYou step boldy out to face the '+ newEnemy.enemyName +' once again, with a wry smile.'+
                                    '\nThe '+ newEnemy.enemyName +' is astonished when you catch it\'s next attack midstrike.'+
                                    '\nEven more so when you rip off it\'s are and slam it down it\'s throat!');
                        player.hp = 100;
                        player.attack = 100;
                        player.enemiesKilled++;
                        console.log('\n\n\t'+ name + '\'s current hp: ' + player.hp +
                                '\n\t\t\tattack: '+ player.attack +
                                '\n\t\t\tenemies killed: '+ player.enemiesKilled +
                                '\n\nYou now throw your shoulders back and begin strutting your way to Grammy\'s');
                    }
                    if(appleSelection === 2) {
                        console.log('\n\nYou aren\'t doing a damn thing with a single apple, \nafter all, Grammy gets disappointed easily.'+
                                    '\nYou throw the bag of apples back over your shoulder and return to face the '+ newEnemy.enemyName);
                        } 
                    }   

                } //End of fight sequence
         }else{                             // player has 50% change of getting away unscathed
            function tryToEscape(){         //50% chance that player gets away
                var num = Math.floor(Math.random()*10);
                if(num < 5){
                    console.log('.'+'\n  .'+'\n    .'+'\n      .'+'\n        .'+'\n          .'+
                                '\nYou got away!'+
                                '\nlet\'s hope that this luck doesn\'t run out!')
                }else{                      //player gets hit
                    console.log('.'+'\n  .'+'\n    .'+'\n      .'+'\n        .'+'\n          .'+
                                '\nThe enemy got in a blow before you got away');
                    player.hp = player.hp - newEnemy.attack;
                }
            }
            tryToEscape();
            // make sure the player is not dead
            if(player.hp < 0) {             //player dies
                console.log('\n\t\t YOU DIED.\n\n\t\tRIP ' + name + '\n\n\n');
                break;
                }
            // console.log player stats. 
            console.log('\n\t'+ name + '\'s current hp: ' + player.hp +
                        // '\n\t\titems: '+ player.items +
                        '\n\t\tenemies killed: '+ player.enemiesKilled);

            console.log('\n Now pick up and get going, Grammy is waiting!')
            thereIsEnemy = false;
            }

     }
}


                        //         var enemy = genRandomEnemy();
                        //         console.log("A wild "+ enemy.name + " has appeared!");
                        //         var choice = rs.keyInYN("Do you wish to fight?");
                        //         if(choice){
                        //             // keep fighting as long as both are alive
                        //             while(enemy.hp > 0 && player.hp > 0){
                        //                 console.log("The " + enemy.name + " strikes first.")
                        //                 player.hp -= enemy.attack;
                        //                 if(player.hp < 0) break;
                        //                 console.log("You strike back with everything you can muster.")
                        //                 enemy.hp -= player.attach;
                        //                 enemy.attack = genAttackPower();
                        //                 player.attack = genAttackPower();
                        //             }
                        //             if(player.hp < 0) {
                        //                 win = false;
                        //                 break;
                        //             }else{
                        //                 console.log("You defeated the enemy!");
                        //                 player.enemiesKilled++;
                        //                 if(player.enemiesKilled > 2) {
                        //                     win = true;
                        //                     break;
                        //                 }
                        //                 //perhaps pick up a an item
                        //             }
                        //         }else{

                        //         }
                        //             // select run or fight
                        //                 // if run deal possible damage
                        //                 // if fight start fight sequence
                        //                     // check hit points of the player and enemy to see who wins
                        //                         // if player hp is < 1, break out of game and lose
                        //                         // if enemy hp is < 1, then earn an item and add to kills, and continue to top of loop

                        // }
                        // if (win) {
                        //     console.log("You won!");
                        // }else{
                        //     console.log("You suck!!");