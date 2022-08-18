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
    edit: editWorldFirst,
	
}


async function show(req, res) {
	WorldFirst.findById(req.params.id, async function(err, worldFirstDocument){
		let userPost= false;
		if(req.user){
			if(worldFirstDocument.user == req.user.id){
				userPost=true
			} 
		}
		const guild=await Guild.findById(worldFirstDocument.guild)
		//Guild.find({worldFirst:req.params.id}, function(err, guildDocument){
			
		console.log(worldFirstDocument, "world first page")
		res.render('worldfirst/show', { title: 'Kill Details', worldFirst: worldFirstDocument, userPost, guild});
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
	console.log(req.user,"this is the user");
	req.body.guild=guildDocument
	req.body.user=req.user.id
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
async function updateOne(req, res) {
	const guildDocument=await Guild.create({guild: req.body.guild});
	WorldFirst.findById(req.params.id, function(err, worldFirstDocument){
		worldFirstDocument.attempts=req.body.attempts
	worldFirstDocument.guild=guildDocument._id	 
		worldFirstDocument.killDate=req.body.killDate
		worldFirstDocument.boss=req.body.boss
		
		worldFirstDocument.save(function(err){
		
			res.redirect('/worldfirst')
		})
       
    })
}
function editWorldFirst(req, res){
    WorldFirst.findById(req.params.id, function(err, worldFirstDocument){
		// worldFirstDocument.attempts=req.body.attempts 
		// worldFirstDocument.killDate=req.body.killDate
		// worldFirstDocument.boss=req.body.boss
		// worldFirstDocument.save(function(err){
			if(err){
				res.redirect("/worldfirst")
			}
			res.render('worldfirst/edit', { title: 'Kill Details', worldFirst: worldFirstDocument})
		})
       
    
}  

function editForm(req, res){
	WorldFirst.findOne({_id: req.params.id},function(err, worldfirstDoc){
	res.render('worldfirst/edit', worldfirstDoc)
})
}