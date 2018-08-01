const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const PORT = 8282;
const morgan = require('morgan');

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/bounties", require('./routes/bounties.js'));

mongoose.connect('mongodb://localhost:27017/bounties',{useNewUrlParser: true})  
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));
