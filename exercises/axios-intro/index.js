// var axios = require("axios");                    not needed with that other script url in html

// always sketch out what an app will look like on a piece of paper
//adope.xd(free), sketch, envision studio, figma(has a web app, opensourced their api so it's taking over sketch), wireframe.cc(also has a web app)
//you might never have to design your own, an incredible skill is to take what designers give you and bring it to fruition


// all the needed elements and store them as variables
var section = document.querySelector("section");
var form = document.querySelector("form");

//getting all the data is the same as the pokemon exercise, but we're using AXIOS, so it's easier. 
//make a get request using Axios

                                                            //This is so damn tedious, React.js makes this way easier, by writing html in javascript. 
var url = "https://api.vschool.io/[nathan_wengert]/todo/";

var displayTodo = function(){
            //make wrapper
            var wrapper = document.createElement("div");
                //make header
                var h3 = document.createElement("h3");
                h3.innerHTML = todo.title;
                //make content
                var descP = document.createElement("p");
                descP.innerHTML = todo.description;
                //make price
                var priceP = document.createElement("p");
                priceP.innerHTML = todo.price;
                //make checkbox
                var label = document.createElement('label');
                label.innerHTML = "Completed";

                var input = document.createElement("input");
                input.type = "checkbox";
                label.appendChild(input);

                //make delete button

                //append all the things to the wrapper
                wrapper.appendChild(h3);
                wrapper.appendChild(descP);
                wrapper.appendChild(priceP);
                wrapper.appendChild(label);

                // append them to the page
                section.appendChild(wrapper);
        };


axios.get(url)
    .then(function(response){
        // convert data into html elements, to make them readable
        var todos = response.data;
        todos.forEach(function(todo){
            //make wrapper
            var wrapper = document.createElement("div");
                //make header
                var h3 = document.createElement("h3");
                h3.innerHTML = todo.title;
                //make content
                var descP = document.createElement("p");
                descP.innerHTML = todo.description;
                //make price
                var priceP = document.createElement("p");
                priceP.innerHTML = todo.price;
                //make checkbox
                var label = document.createElement('label');
                label.innerHTML = "Completed";

                var input = document.createElement("input");
                input.type = "checkbox";
                label.appendChild(input);

                //make delete button

                //append all the things to the wrapper
                wrapper.appendChild(h3);
                wrapper.appendChild(descP);
                wrapper.appendChild(priceP);
                wrapper.appendChild(label);

                // append them to the page
                section.appendChild(wrapper);
                
        }) 
    })
    .catch(function(err){
        console.log(err);
    });

    //we need to be able to redo all of this with an event listener 
    //so that when we submit, the page will update

    form.addEventListener("submit", function(e){
        //store input values in a todo object

        // POST the data using axios

        // call the displayTodo function with response data; 
    })
