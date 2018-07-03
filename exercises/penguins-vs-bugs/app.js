var isPenguinsTurn;

function Team(name, population) {
    this.name = name;
    this.population = population;
    this.isAlive = function() {
     return this.population > 0;   
    }
}


var penguins = Team("penguins", 1000000);
var communists = Team("communists", 1000000);

function sendNuke(party, onHit, onMiss) {
    var success = randNum(0, 3)
    if (success === 0) {
        onHit(party);
    }   else {
        onMiss(party);
    }
}

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}     

function onHit(whoGotNuked) {
    isPenguinsTurn = !isPenguinsTurn;
    whoGotNuked.population === whoGotNuked.population - ranNum(10000, 200000);
    consol.log(whoGotNuked.name + " got nuked and have " + whoGotNuked.population + " population left.");
}

function onMiss(party) {
    isPenguinsTurn = !isPenguinsTurn;
    console.log(party.name + " did not get hit");
}



    
    if (randNum(0, 1) === 1) {
        isPenguinsTurn === true;
        sendNuke(penguins, onHit, onMiss);
    } else {
        isPenguinsTurn === false;
        sendNuke(communists, onHit, onMiss);
    }

while (penguins.isAlive && communists.isAlive) {
    if (isPenguinTurn) {
        sendNuke(communists);
    } else {
        sendNuke(penguins);
    }
}


console.log("Game over");