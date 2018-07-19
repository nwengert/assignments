const express = require('express')
const movieRoutes = express.Router()
const uuid = require("uuid");

const ACTORS = require("../actors.json"); //this is because the json object was saved in a .json

movieRoutes.get("/", (req, res)=> {
        res.send(ACTORS);  //in another server..js there is a filter method here
    })
    
    .post((req, res) => {
        let newMovie = req.body;
        newMovie._id = uuid();
        ACTORS.push(newActor);
        console.log(req.body);
        res.send(newActor);
    });

    movieRoutes.get((req, res) => {
            // req.params
            const foundActor = ACTORS.find(movie => movie._id === req.params.id);
            res.send(foundActor);
        })
        .put((req, res) =>{
            const toBeEdited = ACTORS.find(movie => movie._id === req.params.id);
            for(let key in req.body){
                toBeEdited[key] = req.body[key]
            }   
            res.send(toBeEdited);   
        })
        .delete((req, res) =>{
            const deleteMovie = ACTORS.find(movie => movie._id === req.params.id);
            ACTORS.splice(MOVIES.indexOf(deleteMovie))
            return res.send(deleteMovie);
        })
movieRoutes.listen(8080, ()=> console.log(`server running on port ${PORT}`))  ;      
module.exports(movieroutes)