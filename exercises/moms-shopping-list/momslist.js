// Tues 19 Just 2018 started

//This from Ben helping Taylor
var add = document.querySelector("button");
var section = document.querySelector("section");

add.addEventListener("click", function(){
    var parent = document.createElement("div");
    var p = document.createElement("p");
    p.innerHTML = "some input text";
    var button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click", function(){
        section.removeChild(parent);
    })
    parent.appendChild(p);
    parent.appendChild(button);
    section.appendChild(parent);
})