var db = require('../models');

function index(req, res) {
	db.Recipe.find({}, function(err, recipes) {
		console.log('in controllers');
		res.json(recipes);
	});
}

function create(req, res){
	var data = req.body;

	db.Recipe.create(req.body, function (err, recipe){
		res.json(recipe);
	});
}

function show(req, res){
  db.Recipe.findById(req.params.recipeId, function(err, foundRecipe) {
    if(err) { console.log('recipesController.show error', err); }
    console.log('recipesController.show responding with', foundRecipe);
    res.json(foundRecipe);
  });
}

function destroy(req, res){
  db.Recipe.findOneAndRemove({ _id: req.params.recipeId }, function(err, foundRecipe){
    res.json(foundRecipe);
  });
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
