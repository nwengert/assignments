// This is where I'm practicing code to put into rpg.js


// build a random enemy

var enemyNames = ["Yoyo", "ChupaCabra", "FangHorn", "Duende", "Demigorgon", "Karen"];
var enemyHPs = [85, 70, 77, 68, 55, 82];
var enemyDamage = [20, 22, 17, 68, 44, 33];
var enemyItem = ["rock", "stick", "sword", "nothing", "pinecone", "axe"];

function genRandomEnemy() {
    var enemyNames = ["Yoyo", "ChupaCabra", "FangHorn", "Duende", "Demigorgon", "Karen"];
    var enemyHPs = [85, 70, 77, 68, 55, 82];
    var enemyAttack = [10, 20, 22, 15, 17, 33];
    var enemyDamage = [20, 22, 17, 68, 44, 33];
    return new Enemy(enemyNames[Math.random() * enemyNames.length], hp, attack);
}