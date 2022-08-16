const mongoose = require("mongoose");


// const guildSchema = new mongoose.Schema(
//     {
//       content: String,
//       guildName: String,
//       worldFirsts: Number,

//     },
//    {
//    timestamps: true, 
//    } 
// );

const worldFirstSchema =  new mongoose.Schema ({
    boss: String,       
    killDate: Number,
    attempts: Number,
    guild: String,
    
});
module.exports = mongoose.model('WorldFirst', worldFirstSchema);