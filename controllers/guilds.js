const Guild = require("../models/guilds");
const WorldFirst = require("../models/worldfirst");

module.exports = {
    new: newComment,
    create,
    index,
    show,
};

async function show(req, res){
   try {
      
      const guildDocument = await Guild.findById(req.params.id)
                                        .populate("guilds")
                                        .exec()
  
      res.render("guild/show", {
        guild: guildDocument,
       
      });
  
    } catch(err){
      res.send(err);
    }
