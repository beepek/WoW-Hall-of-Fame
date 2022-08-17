const WorldFirst = require('../models/worldfirst')
const Guilds = require('../models/guilds');
//const worldfirst = require('../models/worldfirst');
// import our Model object which can perform crud operations
// on the movies collection in our mongodb database

module.exports = {
	new: newWorldFirst, 
	create,
	index,
	show,
    delete: deleteWorldFirst,
    update: updateOne,
    edit: editWorldFirst
	
}
function show(req, res) {
	WorldFirst.findById(req.params.id, function(err, worldFirstDocument){
		Guilds.find({worldFirst:req.params.id}, function(err, guildDocuments){
		console.log(worldFirstDocument, "world first page")
		res.render('worldfirst/show', { title: 'Kill Details', worldFirst: worldFirstDocument, guilds: guildDocuments});
		})
	});
}

function index(req, res) {
	// List out the flights
	WorldFirst.find({}, function(err, allWorldFirstsInTheDatabase){
		console.log(allWorldFirstsInTheDatabase);//Ticket.find({flightDocumentCreatedInTheDatabase}) " <- all the flights");
		if(err){
			res.send('You have an error trying to find the world firsts, check the terminal')
		}

		// response should be inside the callback, 
		// because this is after we got a response from the db that we 
		// found all the world firsts
		res.render('worldfirst/index.ejs', {
			worldFirst: allWorldFirstsInTheDatabase
		});// end of render
	});

	
}

function newWorldFirst(req, res){
	res.render('worldfirst/new.ejs')
}

function create(req, res) {
    
    WorldFirst.create(req.body, function(err, worldFirstDocument){
        return res.render('worldfirst/new.ejs')
    })
    // WorldFirst.findById(req.params.id, function (err, worldFirstDocument) {
    //    console.log(worldFirstDocument, "world first document");
    //    worldFirstDocument.worldFirst.push(req.body);
    console.log(req.params.id, "<- params worldfirst id");
    console.log(req.body, "the contents of the form");
    //    worldFirstDocument.save(function(err) {
        res.redirect(`worldfirst`);
       };
function deleteWorldFirst(req, res) {
    WorldFirst.findByIdAndRemove(req.params.id, function(){
        res.redirect('/worldfirst')
    })
}
function updateOne(req, res) {
    WorldFirst.findByIdAndUpdate(req.params.id, function(){
        res.redirect('/worldfirst')
    })
}
function editWorldFirst(req, res){
    WorldFirst.findById(req.params.id, function(err, worldFirstDocument){
        res.render('worldfirst/edit', { title: 'Kill Details', worldFirst: worldFirstDocument})
    })
}  
