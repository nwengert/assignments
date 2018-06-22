//make a click counter, that will console.log how often the button is clicked.

var button = document.getElementById('myBtn');
var display = document.getElementById('mySpan');

var count = 0;
button.onclick = function clickCount(){
    count++;
    display.innerHTML = count;
}

console.log(count);
localStorage.removeItem('clicks', 22);
localStorage.setItem('foo', 'bar');
localStorage.setItem('myAge', 32);
