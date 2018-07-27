const express = require('express');
const bountiesRouter = express.Router();
const Bounty = require("../models/bounties.js");

bountiesRouter.route("/")
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(bounties);
        })
    })
    .post((req, res) => {
        const newBounty = new Bounty(req.body);
        newBounty.save((err, savedBounty) => {
            if(err) return res.status(500).send(err);
            return res.status(201).send(savedBounty);
        })
    })
bountiesRouter.route("/:id")
    .get((req, res) => {
        Bounty.findById(req.params.id, (err, foundBounty) => {
            if(err) res.status(500).send(err);
            return res.send(foundBounty);
        })
    })
    .delete((req, res) => {
        Bounty.findByIdAndRemove(req.params.id, (err) => {
            res.status(204).send();
        })
    })
    .put((req, res) => {
        Bounty.findByIdAndUpdate(req,params.id, req.body, { new: true }, (err, updateBounty) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(updateBounty);
        })
    })
    module.exports = bountiesRouter;