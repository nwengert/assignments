const express =  require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const PORT = 8282;

const BOUNTIES = [];

const app = express();
app.use(bodyParser.json());

app.route("/bounties")
    .get((req, res)=> {
        res.send(BOUNTIES);
    })
    .post((req, res)=> {
        let newBounty = req.body;
        newBounty._id = uuid();
        BOUNTIES.push(newBounty);
        res.send(newBounty);
    })

    app.route("/bounties/:id")
        .get((req, res)=> {
            const foundBounty = BOUNTIES.find(bounty => bounty._id === req.params.id);
            res.send(foundBounty);
        })
        .put((req, res)=> {
            const toBeEdited = BOUNTIES.find(bounty => bounty._id === req.params.id);
            for(let key in req.body){
                toBeEdited[key] = req.body[key]
            }
            res.send(toBeEdited);
        })
        .delete((req, res) =>{
            const deleteBounty = BOUNTIES.find(bounty => bounty._id === req.params.id);
            BOUNTIES.splice(BOUNTIES.indexOf(deleteBounty))
            return res.send(deleteBounty);
        })

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));
