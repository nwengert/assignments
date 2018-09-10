
const axios = require("axios");

//loop through entire meals database
//if "gender" : "female " || "gender" : "male "   then take away that space!

const getMeals = (Meal) => {
    axios.get("http://localhost:8181/meals")
        .then(function(response){
            console.log(response.data);
        })
        .catch(function(err){
            console.log(err);
        })
}
console.log(getMeals());