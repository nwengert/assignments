class Player {
      // define static properties with a constructor
      constructor(){
          this.name = "";
          this.totalCoins = 0;
          this.status = [`Powered Up`, `Big`, `Small`, `Dead`];
          this.hasStar = false;
        //set the other static properties

      }
      setName(namePicked){
        this.name = namePicked;
      }
      gotHit(){
          if(this.status === `Powered Up`){
              this.status === `Big`;
          }else if(this.status === `Big`){
              this.status === `Small`;
          }else if(this.status === `Small`){
              this.status === `Dead`;
          }
        }
        gotPoweredUp(){
            if(this.status === `Small`){
                this.status === `Big`;
            }else if(this.status === `Big`){
                this.status === `Powered Up`;
            }
        // }
        // gameActive(true){
        //     if(this.status === `Dead`){
        //         return false;
        //     }
        // }

const maximum = 2;
const minimum = 0;
const randomRange = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

if (randomRange() === 0) {
    return gotHit();
} else if (randomRange() === 1) {
        return gotPowerup ();
} else if (randomRange()=== 2) {
    return addCoin();
}

        





    //     addCoin(){
    //         this.totalCoins++;
    //     }
    //     print(){
    //         console.log(`Name: ${this.name} \nStatus: ${this.status}
    //         \nTotal Coins: ${this.totalCoins}\nHas Star: ${this.hasStar}`)
    //     }
    //   }