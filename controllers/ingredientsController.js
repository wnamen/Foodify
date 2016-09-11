var db = require('../models');

function index(req, res) {
	db.Ingredient.find({}, function(err, ingredients) {
		// console.log('in controllers');
		res.json(ingredients);
	});
}

function create(req, res){
	var data = req.body;

	db.Ingredient.create(req.body, function (err, ingredient){
		res.json(ingredient);
	});
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
