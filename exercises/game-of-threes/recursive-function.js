//  RECURSIVE FUNCTION LESSON FROM BEN july 10
//how to write a recursive function

const recurse = (x) => {
    //BASE CASE  - something that will stop the loop
    if( x < 1 ) return `Loop finished, x = ${x}`;
    console.log(x);
    //to make it recurseive, you just call itself inside itself
    return recurse( x - 1 )
}

console.log(recurse(10));