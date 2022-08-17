const WorldFirst = require('../models/worldfirst')
const Guild = require('../models/guild');
const guild = require('../models/guild');
const worldfirst = require('../models/worldfirst');

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
		//Guild.find({worldFirst:req.params.id}, function(err, guildDocument){
		console.log(worldFirstDocument, "world first page")
		res.render('worldfirst/show', { title: 'Kill Details', worldFirst: worldFirstDocument});
		//})
	});
}

async function index(req, res) {
	// List out the flights
	const worldFirstDocuments= await WorldFirst.find({}); 
		const worldFirstArray=[]
		for(worldFirstDoc of worldFirstDocuments){
		console.log(worldFirstDoc,"worldFirst");
			console.log(worldFirstDoc.guild,"world first guild");
			const guildDoc= await Guild.findById(worldFirstDoc.guild);
const newWorldFirst={
	boss: worldFirstDoc.boss, 
	guild: guildDoc.guild,
	_id: worldFirstDoc._id,
	killDate: worldFirstDoc.killDate,
	attempts: worldFirstDoc.attempts,
}
		worldFirstArray.push(newWorldFirst);
		}
		
		console.log(worldFirstArray, "all world Firsts");

		//Ticket.find({flightDocumentCreatedInTheDatabase}) " <- all the flights");
		
			//res.send('You have an error trying to find the world Firsts, check the terminal')
		

		// response should be inside the callback, 
		// because this is after we got a response from the db that we 
		// found all the world Firsts
		res.render('worldfirst/index.ejs', {
			worldFirst: worldFirstArray
		});// end of render
	

	
}

function newWorldFirst(req, res){
	res.render('worldfirst/new.ejs')
}

async function create(req, res) {
   console.log(req.body.guild, "reqbody");
	const guildDocument=await Guild.create({guild: req.body.guild});
	req.body.guild=guildDocument
	const worldFirstDocument=await WorldFirst.create(req.body)
	console.log(guildDocument, "guild document");
		//WorldFirst.create(req.body, function(err, worldFirstDocument){
	console.log(worldFirstDocument, "world first document");
			// worldFirstDocument.guild=guildDocument;
			// worldFirstDocument.save()
			
	return res.redirect('/worldfirst')
		
    console.log(req.params.id, "<- params worldfirst id");
    console.log(req.body, "the contents of the form");
    //    worldFirstDocument.save(function(err) {
        //res.redirect(`worldfirst`);
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
