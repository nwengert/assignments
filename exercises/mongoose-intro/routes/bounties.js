const express = require('express');

const bountiesRouter = express.Router();
const Bounty = require("../models/bounties");

bountiesRouter.route("/")
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            //gotta tell the user if there was an error
            if(err) return res.status(500).send(err);
            //put a return in front of every res.send
            return res.status(200).send(bounties);
        })
    })
    .post((req, res) => {
        //turn req.body into mongoose document
        const newBounty = new Bounty(req.body);
        //save newly created doc to the collection
        newBounty.save((err, savedBounty) => {
            if(err) return res.status(500).send(err);
            return res.status(201).send(savedBounty);
        })
    })
bountiesRouter.route("/:id")
    .get((req, res) => {
        //query database for a document with _id of req.params.id
        Bounty.findById(req.params.id, (err, foundBounty) => {
            if(err) return res.status(500).send(err);
            return res.send(foundBounty);
        })
    })
    .delete((req, res) => {
        Bounty.findByIdAndRemove(req.params.id, (err) => {
            //you could return the item that was just deleted, but we wont
            res.status(204).send();
        })
    })
    .put((req, res) => {
        Bounty.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateBounty) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(updateBounty);
        })

module.exports = bountiesRouter;