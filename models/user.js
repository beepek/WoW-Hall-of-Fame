const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: String,
	googleId: {
	  type: String,
	  required: true
	},
	email: String,
	avatar: String,
	worldFirst: {type: mongoose.Schema.Types.ObjectId, ref: "WorldFirst"}
  }, {
	timestamps: true
  });
  

module.exports = mongoose.model('User', userSchema);