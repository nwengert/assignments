//July 10, downstairs because of the broken a/c on 4th floor, Nate teaching


//Javascript Promise

// const arr = new Array()
//things build into JS
//      date
//      all the data types
// Promise is one of those

//Promise requires a cb function, allows js to run asycronously
// we can have code run while AXIOS is running in the background
//JS promise can be in one of three states
    //fulfilled, rejected, pending
    //once it's fulfilled or rejected, it can't be anything else
    //before that, it's pending (duh)
    //a pending promise may gtransition into a fulfilled or rejected state
    //Once fultilled/rejeted, it cannot change it's status

// const arr = new Promise (function(resolvev, reject){

// })

// console.log(arr);   //Promise { <pending> }


function wait(time){
    return new Promise(function(resolve, reject){
        return setTimeout(resolve, time)
    })
}

wait(2000).then(() => console.log("Dinner is ready"))
          .catch(err => {
              console.log("There was an error.")
          })