const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 8080;
const morgan = require("morgan");
const MEALS = [];

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/meals", require("./routes/meals.js"));

mongoose.connect('mongodb://localhost:27017/bounties',{useNewUrlParser: true})  
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err => console.error(err));
// app.use(logger);                 I DONT KNOW WHAT THESE ARE FOR
// app.use(authenticate);
app.listen(PORT, ()=> console.log(`Tu servidor ya corre por puerta ${PORT}`))