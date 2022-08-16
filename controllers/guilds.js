const Guild = require("../models/guilds");
const WorldFirst = require("../models/worldfirst");

 module.exports = {
    // new: newComment,
     //create,
     index,
     show,
 };

 function show(req, res) {
	WorldFirst.findById(req.params.id, function(err, worldFirstDocument){
		//Ticket.find({flight:req.params.id}, function(err, ticketDocuments){
		console.log(worldFirstDocument, "world first page")
		res.render('worldfirst/show', { title: 'world firsts', worldFirst: worldFirstDocument});
		})
	};


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
        guilds: allGuildsInTheDatabase,
      }); // end of render
    });
  }