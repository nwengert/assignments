// This is where I'm practicing code to put into rpg.js
var rs = require("readline-sync");


// build a random enemy

// var enemyNames = ["Yoyo", "ChupaCabra", "FangHorn", "Duende", "Demigorgon", "Karen"];
// var enemyHPs = [85, 70, 77, 68, 55, 82];
// var enemyDamage = [20, 22, 17, 68, 44, 33];
// var enemyItem = ["rock", "stick", "sword", "nothing", "pinecone", "axe"];

// function getRandomEnemy() {
//     var enemyNames = ["Yoyo", "ChupaCabra", "FangHorn", "Duende", "Demigorgon", "Karen"];
//     var enemyHPs = [85, 70, 77, 68, 55, 82];
//     var enemyAttack = [10, 20, 22, 15, 17, 33];
//     var enemyDamage = [20, 22, 17, 68, 44, 33];
//     return new Enemy(enemyNames[Math.random() * enemyNames.length], hp, attack);
// }



// while(true){
//     var isWalking = rs.question('Press W to begin walking    ', { limit: "w", limitMessage: "Wrong key!"});

        
    
// }


// function checkForEnemy(){                   //see whether there is an enemy -- 1/4 or 1/3 chance that there is one. 
//     if (Math.floor(Math.random() * 100) < 75) {
//         var thereIsEnemy = false;
//         return('There is nothing out there, for now...');
//     }else{
//         var thereIsEnemy = true;
//         return('There is an enemy coming for you!  Get ready to fight!  Or run I guess, you can do that too');
//     }
    
// }
// console.log(checkForEnemy);


//////
/////
////   GENERATE THINGS
///
//



// var name = 'Person Man';

// function genHp(){
//     return Math.floor(Math.random() * 11) + 90;
// }
// function genAttackPower(){
//     return Math.floor(Math.random() * 11) + 20;          // it ill always be 20, with potential to be 30
// }
// function genDamage(){
//     return Math.floor(Math.random() * 11) + 5;             // a little damage, because they're unhealthy mutated forest dwellers
// }
// ////
// ///   enemy
// //
// var possibleEnemyNames = ["Yoyo", "ChupaCabra", "FangHorn", "Duende", "Demigorgon", "Karen"];

// genEnemyNames = function() {
// console.log('You are able to see that it is a '+ newEnemy.enemyName + ' coming after you. ')    return possibleEnemyNames[Math.floor(Math.random()*6)];
// }
// ////
// ///
// //
// var player = {
//     name: name,
//     hp: 100,
//     attack: genAttackPower(),
//     damage: 0,
//     // items: [startingSelection],
//     enemiesKilled: 0
// }
// function GenRandomEnemy() {
//     this.enemyName = genEnemyNames();
//     this.hp = genHp();
//     this.attack = genAttackPower();
//     this.damage = genDamage();
//     return({enemyName, hp, attack, damage});
// }




// var newEnemy = GenRandomEnemy();
// console.log(newEnemy);
// console.log(genEnemyNames());


// newEnemy = 'Demigorgon';


// var appleChoice = ['Throw one of your apples at the ' + newEnemy, 
//                     'Eat one of the apples',
//                     'Do nothing with the apples, Granny would kill you faster than the '+ newEnemy];

// console.log(appleChoice[2]);
function genAttackPower(){
    return Math.floor(Math.random() * 11) + 20;          // it ill always be 20, with potential to be 30
}
var attack = 70;

if(attack !== 100) {
    attack = genAttackPower();
}

console.log(attack);