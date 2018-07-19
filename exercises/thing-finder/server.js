const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const PORT = 8080;

const TACOS = [];
const app = express();
app.use(bodyParser.json());

app.route("/tacos")
    .get((req, res) => {
        res.send(TACOS.filter(taco => req.query.tortilla ? taco.tortilla === req.query.tortilla : true));
    })
    .post((req, res) => {
        let newTaco = req.body;
        newTaco._id = uuid();
        TACOS.push(newTaco);
        console.log(req.body);
        res.send(newTaco);
    });

app.route("/tacos/:id")
    .get((req, res) => {
        const foundTaco = TACOS.find(taco => taco._id === req.params.id);
        res.send(foundTaco);
    })
    .put((req, res) => {
        const toBeEdited = TACOS.find(taco => tacos._id === req.params.id);
        for(let key in req.body){
            toBeEdited[key] = req.body[key]
        }
        res.send(toBeEdited);
    })
    .delete((req, res) => {
        const deleteTaco = TACOS.find(taco => taco._id === req.params.id);
        TACOS.splice(TACOS.indexOf(deleteTaco))
        res.send(deleteTaco);
    })

app.listen(PORT, ()=> console.log(`Server corriendo on port ${PORT}`));
