const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guildSchema = new Schema({
    guildName: {type: String, required: true},
    
})