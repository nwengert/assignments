
str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
const repeatedWords = [];

const matchWords = str => {
    //get rid of special chars and capitals
    //split string
    const noSpecial = str.replace(/[^a-z\s]/gi, "").toLowerCase();
                                //^not, \s not spaces, gi global, case-insensitive
    //loop through array
    const sorter = {};
    const output = [];
    splitted.forEach(word => {
        if(sorter.hasOwnProperty(word) && !output.includes(word)){         
            output.push(word);
        } else {
            //give the sorter a property
            sorter[word] = true;
        }
    //check out object to see if it already has a property with that string name
    //if so, add to duplicates array
    //if not, set string as a key on the object

    // return duplicate array
    return output;
});

module.exports = matchWords         //i don't know what this damn error is