


document.getElementById("addbutton").addEventListener("click", function (e) {
    e.preventDefault()
    var FirstAdd = document.getElementById("addone").valueAsNumber;
    var SecondAdd = document.getElementById("addtwo").valueAsNumber;

    var mathSpot = document.getElementById("addform");
    var answer = document.createElement("span");
    answer.innerText = FirstAdd + SecondAdd;
    mathSpot.appendChild(answer);
})

document.getElementById("subtractbutton").addEventListener("click", function (e) {
    e.preventDefault()
    var FirstSubtract = document.getElementById("subone").valueAsNumber;
    var SecondSubtract = document.getElementById("subtwo").valueAsNumber;

    var mathSpot = document.getElementById("subtractform");
    var answer = document.createElement("span");
    answer.innerText = FirstSubtract - SecondSubtract;
    mathSpot.appendChild(answer);
    console.log(FirstSubtract - SecondSubtract);
})

document.getElementById("multiplybutton").addEventListener("click", function (e) {
    e.preventDefault()
    var Firstmultiply = document.getElementById("multOne").valueAsNumber;
    var Secondmultiply = document.getElementById("multTwo").valueAsNumber;
    var mathSpot = document.getElementById("multiplyform");
    var answer = document.createElement("span");
    answer.innerText = Firstmultiply * Secondmultiply;
    mathSpot.appendChild(answer);

    console.log(Firstmultiply * Secondmultiply);
})



