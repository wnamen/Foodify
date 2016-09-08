var db = require('../models');

function index(req, res) {
	db.Recipe.find({}, function(err, allRecipes) {
		res.json(allRecipes);
	});
}

function create(req, res){

}

function show(req, res){
	
}

function destroy(req, res){
	
}

function update(req, res){
	
}



module.exports = {
	index: index,
	create: create,
	show: show,
	destroy: destroy,
	update: update
};