const mongoose = require('mongoose');
const { Schema } = mongoose;

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    living: Boolean,
    bountyAmount: Number,
    type: {
        type: String,
        enum: ["", "jedi", "sith", "dude", "hunter", "other", "droid", "Sith", "Jedi", "Droid",]
    }
});
//once the schema is defined, we will tell it which collection it belongs to

const bountyModel = mongoose.model("Bounty", bountySchema);
module.exports = bountyModel;