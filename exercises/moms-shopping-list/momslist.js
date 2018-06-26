// Tues 19 Just 2018 started

//This from Ben helping Taylor
var add = document.getElementById("addButton");
var section = document.querySelector("section");
var shoppingItem = document.getElementById("shoppingItem");
let itemNumber = 0;

//populate the list with items that are already in local storage
// for (i = 0; i < localstorage.length; i++) {
//     var parent = document.createElement("div");                  I tried this but didn't get all the way there.  You can see code for commiting to local storage below. 
//     var p = document.createElement("p");
//     p.innerHTML = (`item `+ i);
// }

add.addEventListener("click", function(){
    var parent = document.createElement("div");
    var p = document.createElement("p");
    var itemAdded = (shoppingItem.value[0]).toUpperCase() + (shoppingItem.value).slice(1).toLowerCase();  //proper
    // now see if you can Proper the second word too
    p.innerHTML = itemAdded;
    var button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click", function(){
        section.removeChild(parent);
        //remove item from local storage
    })
    parent.appendChild(button);
    parent.appendChild(p);
    section.appendChild(parent);
    shoppingItem.value = "";
    shoppingItem.focus();
    itemNumber = document.getElementsByTagName('p').length;  //count the number of <p> tags already on the page
    itemNumber++;
    localStorage.setItem(`item ${itemNumber}`, itemAdded);  //commit the item to local storage
    console.log(localStorage.length);
})