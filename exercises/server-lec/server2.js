const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;        
const HIGHPOINTS = [];

const app = express();  
app.use(bodyParser.json());  


app.route("/highpoints")  
    .get((req, res)=> {

        res.send(HIGHPOINTS);
    })
    
    .post((req, res) => {
        let newHP = req.body;
        // give it an id
        newHP._id = uuid();
        // 'save' to our database
        HIGHPOINTS.push(newHP);
        console.log(req.body);
        res.send(newHP);
    });

    app.route("/highpoints/:id")
        .get((req, res) => {
            // req.params
            let foundHP = HIGHPOINTS.find(highpoint => highpoint._id === req.params.id);
            res.send(foundHP);
        })




app.listen(8080, ()=> console.log(`server running on port ${PORT}`))  ;      
