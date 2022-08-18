const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema ({
    comments: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    username: String
});
const worldFirstSchema =  new mongoose.Schema ({
    boss: String,       
    killDate: Number,
    attempts: Number,
    guild: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    comments: [commentSchema]
    
});
module.exports = mongoose.model('WorldFirst', worldFirstSchema);