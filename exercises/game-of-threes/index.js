//  RECURSIVE FUNCTION LESSON FROM BEN july 10
//how to write a recursive function

const gameOfThree = (n, counter = 0) => {
    //BASE CASE  - something that will stop the loop
    if( n === 1 ) return counter
    //determine if n is divisible by three
    if( n % 3 === 0){
        return gameOfThree( n / 3, counter + 1);
    } else {
        if (( n + 1 ) % 3 === 0){
            return gameOfThree((n + 1) / 3, counter + 1);
        } else {
            return gameOfThree((n - 1) / 3, counter + 1);
        }
    }
}
console.log(gameOfThree(14));