
document.getElementById("addbutton").addEventListener("click", function (e) {
    e.preventDefault()
    var FirstAdd = document.getElementById("addone").valueAsNumber;
    var SecondAdd = document.getElementById("addtwo").valueAsNumber;
    alert(FirstAdd + SecondAdd);
})

document.getElementById("subtractbutton").addEventListener("click", function (e) {
    e.preventDefault()
    var FirstSubtract = document.getElementById("subone").valueAsNumber;
    var SecondSubtract = document.getElementById("subtwo").valueAsNumber;
    alert(FirstSubtract - SecondSubtract);
})

document.getElementById("multiplybutton").addEventListener("click", function (e) {
    e.preventDefault()
    var Firstmultiply = document.getElementById("multOne").valueAsNumber;
    var Secondmultiply = document.getElementById("multTwo").valueAsNumber;
    alert(Firstmultiply * Secondmultiply);
})


