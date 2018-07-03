
class Parties {
    constructor(a, b) {
        this.population = 1,000,000;
    }
}
//create the Penguin and Communist parties


const flipCoin = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
console.log(flipCoin());


const sendNuke = (party, 
    onHit = (party) => {
    //if attack was successful
    `The (whoever sent the nuke)'s explosive hit the (got hits)`;
    }, 
    onMiss = () => {
    }){
    //random algorithm determining hit or miss
    const hitOrMiss = () => {
        if(Math.floor(Math.random() * 10) > 5) {
            //return hit
        } else {
            //return miss
        }
    }
    }
