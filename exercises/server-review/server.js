//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

//import routes here


//variables
const PORT = 8080;

//app
const app = express();

//middleware  /  routes
app.use(bodyParser.json());
  
app.use("/bounties", require('./routes/bounties'));

//tell app to start listening for requiest
app.listen(PORT, ()=> console.log(`Server esta corriendo en puerto ${PORT}`));