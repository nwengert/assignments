// The if statements that were originally here were not playing off of each other
// so the ELSE parts of them were screwing everything up

var mouse = {x: 0, y: 0};

document.addEventListener("mousemove", (event)=>{

// if event.y > 300 then set mouse.y = 300
// else if (event.y < 100 then set mouse.y = 100
// else set mouse.y to event.y)

    if (event.y > 300) {
        mouse.y = 300;
    } else if (event.y < 100) {
        mouse.y = 100;
    } else {
        mouse.y = event.y;
    }


    if(event.x > 300) {
        mouse.x = 300;
    }else if (event.x < 100) {
        mouse.x = 100;
    } else {
        mouse.x = event.x;
    }

    document.getElementById("number").innerHTML = "x: " + mouse.x + "<br>y: " + mouse.y

});
