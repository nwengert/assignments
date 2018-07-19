//you can make a server in 5 lines of code, though it won't do shit
// we are going to use EXPRESS, which is a library for building servers.
//          HOW TO MAKE A SERVER
// cd into the folder of your server
// npm init -y       to get the package.json file
// npm install --save express body-parser uuid

const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;         //before const existed, in the times of only VAR, all caps was used to signify a constant variable

const MOVIES = [];

// can't import because node doesn't know how to do that yet

const app = express();   //this is a function
app.use(bodyParser.json());  //this tells it to deal with requests with JSON

//most important part of a server is that it listens for requests
//  so we have to write code to tell it to do so

app.route("/movies")    //http//.www.localhost:8080  <-- this is already known
    .get((req, res)=> {
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
        res.send(MOVIES);
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

    app.route("/movies/:id")
        .get((req, res) => {
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



//ben likes to keep this at the bottom
app.listen(8080, ()=> console.log(`server running on port ${PORT}`))  ;      
                        //we have to tell it which port to listen on, because LocalHost isn't specific enough.
                        //react app by default uses 3000
                        //you can use anything probably btwn 5 and 10k
                        //8080, 8000 are conventional

//node filename in terminal to get it running // server running on port 8080 it'll say
//now lets write endpoints