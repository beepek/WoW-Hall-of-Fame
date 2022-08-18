const mongoose = require("mongoose");


const worldFirstSchema =  new mongoose.Schema ({
    boss: String,       
    killDate: Number,
    attempts: Number,
    guild: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    
});
module.exports = mongoose.model('WorldFirst', worldFirstSchema);