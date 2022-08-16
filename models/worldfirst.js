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
    boss: {
       name: String,       
    },
    killDate: {
        type: Number,
    },
    attempts: {
        type: Number,
    },
    guild: {
        name: String,
    },
})
module.exports = mongoose.model('worldfirst', worldFirstSchema);