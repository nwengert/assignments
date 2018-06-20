// assigned Tue 19 June 2018

// Make a site that tracks how many times the user has clicked anywhere on the page 
// (or a specific button if you prefer) and displays that click count to the user. 
//  Then, using localStorage or sessionStorage, make it so the number of clicks will 
// remain on the screen even after the site is refreshed.

// Extra credit: Put a countdown timer (10-30 seconds) on the page that stops the 
// user's clicks from counting towards the total after the timer ends.


var clickCounter = 0;
// set up a window.click listener which get clicks and add them to the counter
//inner html that will print the current number on the screen

document.getElementById("myBtn").addEventListener("click", function(){
    return clickCounter + 1;
})
var parent = document.getElementById("clicksDisplay");
var mySpan = document.createElement("span");
mySpan.innerHTML = clickCounter;

parent.appendChild
console.log(clickCounter);

// mySpan = document.createElement("span");


