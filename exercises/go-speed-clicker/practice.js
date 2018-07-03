//clicker.js is junk.  I made this just before I actually got it to work. 

//make a click counter, that will console.log how often the button is clicked.

var button = document.getElementById('myBtn');
var display = document.getElementById('mySpan');
var count = localStorage.getItem('current count');
const resetButton = document.getElementById('resetBtn');

display.innerHTML = count;

button.onclick = function clickCount(){
    count++;
    display.innerHTML = count;
    localStorage.setItem('current count', count);
}
resetButton.onclick = function resetCount(){
    count = 0;
    display.innerHTML = count;
    localStorage.setItem('current count', count);
    document.getElementById('myBtn').disabled = false;
    document.getElementById('countdown').innerHTML = '16';
    document.body.style.background = 'white';
    
    countdown();
}

//countdown timer with 'vanilla' javascript  --- I don't really understand how this works, just the gist
var seconds;
var temp;
function countdown() {
  seconds = document.getElementById('countdown').innerHTML;
  seconds = parseInt(seconds, 10);
  timer = document.getElementById("timer");
  if (seconds == 1) {
    temp = document.getElementById('countdown');
    // timer.innerHTML = "That's all the time you get!";
    temp.innerHTML = "That's all the time you get!";
    document.getElementById('myBtn').disabled = true;
    document.body.style.background = 'red';    
    return;
  }
  seconds--;
  temp = document.getElementById('countdown');
  temp.innerHTML = seconds;
  timeout = setTimeout(countdown, 1000);
} 
countdown();


            //I didn't understand how this one worked
// //countdown timer
// document.getElementById('timer').innerHTML =
//   00 + ":" + 16;
  
// startTimer();

// function startTimer() {
//   var presentTime = document.getElementById('timer').innerHTML;
//   var timeArray = presentTime.split(/[:]+/);
//   var m = timeArray[0];
//   var s = checkSecond((timeArray[1] - 1));
//   if(s==59){m =  m - 1}
//   //if(m<0){alert('timer completed')}
//   document.getElementById('timer').innerHTML =
//     m + ":" + s;
//   setTimeout(startTimer, 1000);
// }
// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
//   if (sec < 0) {sec = "59"};
//   return sec;
// }





// console.log(count);
// localStorage.removeItem('clicks', 22);
// localStorage.setItem('foo', 'bar');
// localStorage.setItem('myAge', 32);

