//how to set up a server with mongoose
//mongoose setup

//dependencies
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//variables
const PORT = 8080;
const MONGODB_URI = "mongodb://localhost:27017/bounties-project";
const app = express();


//middleware
app.use(bodyParser.json())

//routes
app.use("/bounties", require("./routes/bounties"))

mongoose.connect(MONGODB_URI,{ useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB yeahboy"))
    .catch(err => console.error(err));


    
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));