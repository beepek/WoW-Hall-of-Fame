const Guild = require("../models/guilds");
const WorldFirst = require("../models/worldfirst");

 module.exports = {
     new: newComment,
     create,
     index,
     show,
 };

async function show(req, res)
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
//wtf am I doing wrong here???????
function index(req, res) {
    // List out the movies
    Guild.find({}, function (err, allGuildsInTheDatabase) {
      console.log(allGuildsInTheDatabase, " <- all the guilds");
      if (err) {
        res.send(
          "You have an error trying to find the guilds, check the terminal"
        );
      }
  
      // response should be inside the callback,
      // because this is after we got a response from the db that we
      // found all the movies
      res.render("guilds/index.ejs", {
        movies: allOfTheMoviesInTheDatabase,
      }); // end of render
    });
  }