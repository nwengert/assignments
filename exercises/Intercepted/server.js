const express = require('express');
const bodyParser = require('body-parser');
const uuid = require ('uuid');

const PORT = 8181;

const ACTIVITIES = [];

const app = express();
app.use(bodyParser.json());

app.route('/activities')
    .get((req, res) => {
        res.send(ACTIVITIES);
    })
    .post((req, res) => {
        let newActivity = req.body;
        newActivity._id = uuid;
        ACTIVITIES.push(newActivity)
        console.log(req.body);
        res.send(newActivity);
    });

    app.route('/activities/:id')
        .get((req, res) => {
            res.send
        })