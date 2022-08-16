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

const worldFirstSchema =  new mongoose.Schema({
    boss: {
       name: String,
       
    },
    killDate: {
        type: Number,
    },
    attempts: Number,
    //how would I put in the video link here?
    guild: [{type: mongoose.Schema.Types.ObjectId, ref: 'guilds'}]
});
module.exports = mongoose.model('worldfirst', worldFirstSchema);