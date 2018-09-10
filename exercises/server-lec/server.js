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

// const MOVIES = [];

// can't import because node doesn't know how to do that yet

const app = express();   //this is a function

app.use(bodyParser.json());  //this tells it to deal with requests with JSON
app.use(logger);
app.use(authenticate);
app.use("/movies", require("./routes/movies"));
//most important part of a server is that it listens for requests
//  so we have to write code to tell it to do so

app.listen(8080, ()=> console.log(`server running on port ${PORT}`))  ;      
                        //we have to tell it which port to listen on, because LocalHost isn't specific enough.
                        //react app by default uses 3000
                        //you can use anything probably btwn 5 and 10k
                        //8080, 8000 are conventional