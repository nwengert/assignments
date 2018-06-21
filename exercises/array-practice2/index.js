// Wed 20 June 2018 warmup


                //this is what i made
// function sortedDogOwners(arr){
//     //filter out the objects without a dog
//     var dogOwners = arr.filter(function(dogOwner){
//         return dogOwner.pets.filter(function(animal){
//             return animal === "dog";
//         })
//     })
//     //sort objects by age
//     var ageSort = dogOwners.sort(function(a, b){
//         return a.age - b.age;
//     })
// }

function sortedDogOwners(arr){
    // sort objects by age first
    var sortedByAge = arr.sort(function(a,b){
        return a.age - b.age;
    });
    // filter sorted array
    return sortedByAge.filter(function(person){
        // check if person.pets has "dog" in it
        return person.pets.includes("dog");
    })
}


//run the test in test.js with mocha.  chai already got installed on this.  it's a good example of setting up a test. 


//2nd part

//dealing with array methods is the most important skill to have

function arbitraryPractice(arr){
    // check for age
    var filteredByAge = arr.filter(function(person){
        return person.age > 20;
    });
    return filteredByAge.reduce(function(accumulator, person){
        // check whether they have nicknames
        // check for at least one dog
        var hasNicknames = person.pets.every(function(pet){
            return pet.nickNames.length;  //tells if there is a nickname
        });
        var hasADog = person.pets.some(function(pet){
            return pet.type === "dog";
        });
        if(hasNicknames && hasADog){
            // then return the dog's name into the array as an <li>
            var liTags = person.pets.map(function(pet){         //you could also do a for each, and push the liTag into the accumulator
                return "<li>" + pet.name + "</li>";
            });
            // pass that string with li tags into the accumulator
            return accumulator.concat(liTags);
        }else{
            return accumulator;
        }
    },[]) //initial property will be this empty array
}
        



module.exports = {
    sortedDogOwners: sortedDogOwners,
    arbitraryPractice: arbitraryPractice,
}