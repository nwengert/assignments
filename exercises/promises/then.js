const axios = require('axios')

// Javascript Promise //
// Can be in 1 of 3 states
    // Fullfilled, Rejected, Pending
    // A pending promise may transition into a fulfilled or rejected state
    // Once fullfilled/rejected, it cannot change it's status
    
    function wait(time){
      return new Promise(function(resolve, reject){
          return setTimeout(reject, time)
      })
  }
  
  wait(2000)
      .then(() => console.log("Dinner is ready"))
      .catch(err => {
          console.log(err)
      })
  







// Promise Chaining //

const swUrl = 'https://swapi.co/api/people/1'

axios.get(swUrl)
.then(response => {
  const starWarsFilm = response.data.films[0]
  return starWarsFilm
})
.then(film => {
  return axios.get(film)
})
.then(response => {
  return axios.get(response.data.characters[4])
})
.then(character => {
  console.log(character)
})
.catch(err => {
  console.log("An error occurred: " + err)
})

