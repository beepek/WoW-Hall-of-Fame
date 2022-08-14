const Guild = require("../models/guilds");
const WorldFirst = require("../models/worldfirst");

module.exports = {
    new: newComment,
    create,
    index,
    show
};

function index(req, res) {
    WorldFirst.find({}, function (err, allOfTheKillsInTheDatabase) {
        console.log(allOfTheKillsInTheDatabase, "all the kills");
        if(err) {
            res.send(
                "you have an error trying to find he kills, check the terminal"
            );
        }
        res.render("worldfirst/index.ejs", {
          worldFirst: allOfTheKillsInTheDatabase,
        });
    });
}
function newComment(req, res) {
   res.render("worldfirst/new.ejs"); 
}