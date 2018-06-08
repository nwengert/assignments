
var getPrice = document.querySelector("button");

getPrice.addEventListener("click", function (e){
    e.preventDefault();
    let val1 = document.querySelector("input[name=goombasCaught]").valueAsNumber;
    let val2 = document.querySelector("input[name=bobombsCaught]").valueAsNumber;
    let val3 = document.querySelector("input[name=cheepcheepsCaught]").valueAsNumber;

    let total = (val1 * 5) + (val2 * 7) + (val3 * 11);

    console.log(total);
    // alert(`Mario can bill for ${total} coins`);
    document.getElementById("pricing").innerHTML = total + " coins owed";
})