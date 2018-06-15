// 1) Sort an array from smallest number to largest
console.log('\n\t sort num arr from smallest to largest')

numberArr = [1, 3, 5, 2, 90, 20];


var newNumbers = numberArr.sort(function(num1, num2){
    return num1 - num2;
})
console.log(newNumbers);

// 2) Sort an array from largest number to smallest
console.log('\n\t sort num arr from Largest to smallest')
var newNumbers2 = numberArr.sort(function(num1, num2){
    return num2 - num1;
})
console.log(newNumbers2);

// 3) Sort an array from shortest string to longest

var words = ["dog", "wolf", "by", "family", "eaten"];

var S2LStrArr = words.sort(function(a, b){
    return a.length - b.length;
})
console.log(S2LStrArr);

// 4) Sort an array alphabetically
console.log('\n\tArray sorted alphabeticamente');
var alphabetize = words.sort(function(a, b){
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
})
console.log(alphabetize);

// 5) Sort the objects in the array by age
console.log('\n\tObects in array sorted by age')
var ninjas = [  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
];

var ageSorted = ninjas.sort(function(ninja1, ninja2){
    return ninja1.age - ninja2.age;
})
console.log(ageSorted);