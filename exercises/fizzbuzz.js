
var fizzBuzz = []
for (i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        fizzBuzz.push('FizzBuzz');
    } else if (i % 3 == 0) {
        fizzBuzz.push('Fizz');
    } else if (i % 5 == 0) {
        fizzBuzz.push('Buzz');
    }else {
        fizzBuzz.push(i);
    }
}
console.log(fizzBuzz);

for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
