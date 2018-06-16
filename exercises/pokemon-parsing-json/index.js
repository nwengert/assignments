//Friday 15 June 2018.  
//This was hard.  I was hating having to do it before starting a weekend


var pokemonNames = [];

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText;
        var jsData = JSON.parse(jsonData);
        for (i = 0; i < jsData.objects[0].pokemon.length; i++) {
            pokemonNames.push(jsData.objects[0].pokemon[i].name);
        }
        for (i = 0; i < pokemonNames.length; i++){
            var h5 = document.createElement("h5");
            h5.innerHTML = pokemonNames[i];  
            var body = document.querySelector("body");
            body.appendChild(h5);
        }
    // console.log(jsData);
    // console.log(pokemonNames);
    }
}
 
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();





//split this into 3 parts
    //stage 1 - get the data to begin with
    //2 - once you have it, then get an array of objects to display on the screen, by converting them to DOM elements


    //just figure out how to post names of an object on the page
