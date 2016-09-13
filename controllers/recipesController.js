var db = require('../models');

function index(req, res) {
	db.Recipe.find({}, function(err, recipes) {
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
    res.json(foundRecipe);
  });
}

function destroy(req, res){
  db.Recipe.findOneAndRemove({ _id: req.params.recipeId }, function(err, foundRecipe){
    res.json(foundRecipe);
  });
}

function update(req, res){
  db.Recipe.findById(req.params.recipeId, function(err, recipe) {
    recipe.title = req.body.title;
    recipe.image = req.body.image;
    recipe.summary = req.body.summary;
    recipe.ingredients = req.body.ingredients;

    recipe.save(function(err, savedRecipe) {

      res.json(savedRecipe);
    });
  });
}



module.exports = {
	index: index,
	create: create,
	show: show,
	destroy: destroy,
	update: update
};
