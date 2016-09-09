var db = require('../models');

function index(req, res) {
	db.Recipe.find({}, function(err, recipes) {
		console.log('in controllers');
		res.json(recipes);
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
