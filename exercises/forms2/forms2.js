//get access to form
//acces the input values
//display alert of the input values

var form = document.demoForm;
var nameInput = form.name;
// nameInput is now unnecessary

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var output = {};
    output.name = this.name.value;
    output.email = this.email.value;
    output.password = this.password.value;
    
    output.isVeteran = this.veteran.checked;
    output.gender = this.gender.value;
    output.awesomeness = this.awesomeness.value;
    output.myLife = this.myLife.value;
    output.occupation = this.occupation.value;
    console.log(output);
})

// nodelist is not a javascript array, so it doesn't have all the fancy prototypes that a js array does
// this is because the browser is providing this data structure, so we have to tell it what to do
