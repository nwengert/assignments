
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

window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   if (key == 66) {
    square.style.backgroundColor = "blue";
   }else if (key == 82) {
    square.style.backgroundColor = "red";
   }else if (key == 79) {
    square.style.backgroundColor = "orange";
   }else if (key == 71) {
    square.style.backgroundColor = "green";
   }else if (key == 89) {
    square.style.backgroundColor = "yellow";
   }else {
    square.style.backgroundColor = "darkgrey";       
   }
}





