const express = require('express')
const movieRoutes = express.Router()
const uuid = require("uuid");

const MOVIES = require("../movies.json"); //this is because the json object was saved in a .json

movieRoutes.get("/", (req, res)=> {
        // console.log("You found me!");
                //with only this, you'll get "You found me!" printing in your terminal.
                    //that's when you make a get request to http://localhost:8080/data on Postman or from chrome
            //So to send real info back to a client after a request, you have to make it able to send a RESPONSE
            //look at EXPRESS DOCUMENTATION, it's amazing btw
            //req and res are both objects.
            //the server gets the {req}, holds on to it, does stuff, makes {res}, and then sends back
        // console.log(req);       //this is a huuuuge object, we'll use very little of it. 
        // console.log(res);           // also huge.
        // res.end();
        // res.send('DATA!!!!!');  //in Postman and on browser, this will return 'DATA!!!!!'

            //\   //
           //  \ //OW WE INSTALL SOMETHING NEW
        // npm install -g nodemon    this listens for changes in code, and restarts server automatically.
        res.send(MOVIES);  //in another server..js there is a filter method here
    })
    
    .post((req, res) => {
        let newMovie = req.body;
        // give it an id
        newMovie._id = uuid();
        // 'save' to our database
        MOVIES.push(newMovie);
        console.log(req.body);
        res.send(newMovie);
    });

    movieRoutes.get((req, res) => {
            // req.params
            const foundMovie = MOVIES.find(movie => movie._id === req.params.id);
            res.send(foundMovie);
        })
        .put((req, res) =>{
            const toBeEdited = MOVIES.find(movie => movie._id === req.params.id);
            for(let key in req.body){
                toBeEdited[key] = req.body[key]
            }   
            res.send(toBeEdited);   
        })
        .delete((req, res) =>{
            const deleteMovie = MOVIES.find(movie => movie._id === req.params.id);
            MOVIES.splice(MOVIES.indexOf(deleteMovie))
            return res.send(deleteMovie);
        })





//node filename in terminal to get it running // server running on port 8080 it'll say
//now lets write endpoints

module.exports(movieroutes)