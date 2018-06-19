var people = [{
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ];  

//   // 4) Sort an array alphabetically
// console.log('\n\tArray sorted alphabeticamente by last name');
// var alphabetize = people.sort(function(person1, person2){
//     if (person1 < person2) return -1;
//     else if (a > b) return 1;
//     return 0;
//     // return person1.age - person2.age;  //this sorts by age
// })
// console.log(alphabetize);

function sortByLNameFilterByAge(arr){
    // sort by last name
        return arr.sort(function (person1, person2) {
            return person1.lastName.localeCompare(person2.lastName);
        })
            .filter(function(person){
                return person.age >= 18;
            })
    //filter by age
    // newArr.filter(function(person1, person2){
    //return new array
};
console.log(sortByLNameFilterByAge(people))
