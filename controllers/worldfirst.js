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
	edit: edit,

}


function show(req, res) {
	WorldFirst.findById(req.params.id, function (err, worldFirstDocument) {

		console.log(worldFirstDocument, "world first page")
		res.render('worldfirst/show', { title: 'Kill Details', worldFirst: worldFirstDocument });
		//})
	});
}

async function index(req, res) {
	// List out the flights
	const worldFirstDocuments = await WorldFirst.find({});


	//worldFirst is the variable in the index page
	res.render('worldfirst/index.ejs', {
		worldFirst: worldFirstDocuments
	});// end of render



}

function newWorldFirst(req, res) {
	res.render('worldfirst/new.ejs')
}

function create(req, res) {
	const worldFirst = new WorldFirst(req.body);
	worldFirst.user = req.user._id;
	worldFirst.save(function(err){
		if (err) return res.redirect('/worldfirst/new');
		res.redirect(`/worldfirst`);
	});
};
function deleteWorldFirst(req, res) {

	WorldFirst.findByIdAndRemove(req.params.id, function () {
		res.redirect('/worldfirst')
	})
}


//11 spent on this basic functionality and nothing to show for it
async function updateOne(req, res) {

}
function edit(req, res) {
	WorldFirst.findById(req.params.id, function (err, worldFirstDocument) {
		// worldFirstDocument.attempts=req.body.attempts 
		// worldFirstDocument.killDate=req.body.killDate
		// worldFirstDocument.boss=req.body.boss
		// worldFirstDocument.save(function(err){
		if (err) {
			res.redirect("/worldfirst")
		}
		res.render('worldfirst/edit', { title: 'Kill Details', worldFirst: worldFirstDocument })
	})


}

