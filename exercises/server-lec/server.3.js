//now this one is for making requests to get specific things

const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;  

const MOVIES = [];


const app = express();   
app.use(bodyParser.json());  

app.route("/movies") 
    .get((req, res)=> {
        console.log(req.query);
        res.send(MOVIES.filter(movie => {
            for(key in req.query) {
                // we want to check for falses
                //if the key pair in my array isn't the same as the kp in the query, it's false
                //in the query, everything is a string, WE deal with any data types
                    //so we temporarily turn everything into a string
                if(String(movie[key].toLowerCase) !== req.query[key].toLowerCase){
                    return false;

                }
            }

            return true;
    })
    
    .post((req, res) => {
        let newMovie = req.body;
        newMovie._id = uuid();
        MOVIES.push(newMovie);
        console.log(req.body);
        res.send(newMovie);
    });

    //anything following a : is a req.parameter
    //there's also req.query with req.body
    //req.query refers to the object that contains the key value pairs from the query string
    //they are all objects, all generated from url string

    app.route("/movies/:id")
        .get((req, res) => {
            console.log(req.query);
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



app.listen(8080, ()=> console.log(`server running on port ${PORT}`))  ;      
 
