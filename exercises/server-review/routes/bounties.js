// const bountyRouter = require('express').Router
const express = require('express');
const bountyRouter = express.Router();


//fake database   --- we wont use this again
const bounties = [];

//start writing routes
// the routes from the other page get taken to here, then changed app to our const
bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties);
    })
    .post()

bountyRouter.route('/:id')
    .get()
    .put()
    .delete()

module.exports = bountyRouter;