const mongoose = require("mongoose");


const worldFirstSchema =  new mongoose.Schema ({
    boss: String,       
    killDate: Number,
    attempts: Number,
    guild: { type: mongoose.Schema.Types.ObjectId, ref: "Guild" }
    
});
module.exports = mongoose.model('WorldFirst', worldFirstSchema);