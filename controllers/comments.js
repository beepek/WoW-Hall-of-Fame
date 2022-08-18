const WorldFirst = require('../models/worldfirst');

module.exports = {
    create
};

function create(req, res) {
    WorldFirst.findById(req.params.id, function(err, worldfirst){
        worldfirst.comments.push(req.body);
        worldfirst.save(function(err){
            res.redirect(`/worldfirst`);
        });
    });
}