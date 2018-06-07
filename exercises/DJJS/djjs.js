


let square = document.getElementById("myBox");

// window.style.backgroundColor = "lightgray";
square.style.backgroundColor = "darkgray";
square.style.marginTop = "20%";
square.style.marginLeft = "20%";
square.style.height = "110px";
square.style.width = "110px";

square.addEventListener("mouseover", function(event){
    square.style.backgroundColor = "blue";
})

        square.addEventListener("mouseleave", function(event){
            square.style.backgroundColor = "darkgray";
        })

square.addEventListener("mousedown", function(event){
    square.style.backgroundColor = "red";
})

square.addEventListener("mouseup", function(event){
    square.style.backgroundColor = "yellow";
})

square.addEventListener("dblclick", function(event){
    square.style.backgroundColor = "green";
})

document.addEventListener("mousewheel", function(event){
    square.style.backgroundColor = "orange";
})


square.addEventListener()
window.addEventListener()


