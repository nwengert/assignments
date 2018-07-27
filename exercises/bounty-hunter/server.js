const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const PORT = 8282;

const BOUNTIES = [];

app.use(bodyParser.json());
app.use("/bounties", require('./routes/bounties.js'))

// app.route("/bounties")
//     .get((req, res)=> {
//         res.send(BOUNTIES);
//     })
//     .post((req, res)=> {
//         let newBounty = req.body;
//         newBounty._id = uuid();
//         BOUNTIES.push(newBounty);
//         res.send(newBounty);
//     })

//     app.route("/bounties/:id")
//         .get((req, res)=> {
//             const foundBounty = BOUNTIES.find(bounty => bounty._id === req.params.id);
//             res.send(foundBounty);
//         })
//         .put((req, res)=> {
//             const toBeEdited = BOUNTIES.find(bounty => bounty._id === req.params.id);
//             for(let key in req.body){
//                 toBeEdited[key] = req.body[key]
//             }
//             res.send(toBeEdited);
//         })
//         .delete((req, res) =>{
//             const deleteBounty = BOUNTIES.find(bounty => bounty._id === req.params.id);
//             BOUNTIES.splice(BOUNTIES.indexOf(deleteBounty))
//             return res.send(deleteBounty);
//         })


mongoose.connect('mongodb://localhost:27017/bounties',{useNewUrlParser: true})  
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

app.use("bounties.js", require('./routes/bounties.js'));

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));
