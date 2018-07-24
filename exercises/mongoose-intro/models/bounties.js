//how to make a schema
const mongoose = require("mongoose");
const { Schema } = mongoose;
//the schema is a structure for building schemas

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    }, 
    lastName: String,
    living: Boolean,
    amount: Number,
    type: {
        type: String,
        required: true,
        enum: ["jedi", "sith"]
    }
});
//once the schema is defined, we need to tell it which collection it belongs to

//model name should be capitalized and singular. Because CONVENTION!
const bountyModel = mongoose.model("Bounty", bountySchema);

module.exports = bountyModel;