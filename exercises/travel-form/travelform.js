

var form = document.travelform;

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var output = {};
    output.firstname = this.firstname.value;
    output.lastname = this.lastname.value;
    output.age = this.age.value;
    output.gender = this.gender.value;
    output.destination = this.destination.value;

    output.vegetarian = this.vegetarian.checked;
    output.kosher = this.kosher.checked;
    output.glutenfree = this.glutenfree.checked;
    output.lactosefree = this.lactosefree.checked;

    console.log(output);

    var diet=[];
    if (output.vegetarian === true) {
        diet.push(' Vegetarian');
    }
    if (output.kosher === true) {
        diet.push(' Kosher');
    }
    if (output.glutenfree === true) {
        diet.push(' Gluten free');
    }
    if (output.lactosefree === true); {
        diet.push(' Lactose free');
    }   
    console.log(diet);


    alert(
    `
    First Name: ${output.firstname}
    Last Name: ${output.lastname}
    Age: ${output.age}
    Gender: ${output.gender}
    Destination: ${output.destination}
    Dietary Restrictions: ${diet}





    `)
})