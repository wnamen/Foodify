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
  db.Ingredient.findById(req.params.ingredientId, function(err, foundIngredient) {
    if(err) { console.log('ingredientsController.show error', err); }
    console.log('ingredientsController.show responding with', foundIngredient);
    res.json(foundIngredients);
  });
}

function destroy(req, res){
  db.Ingredient.findOneAndRemove({ _id: req.params.ingredientId }, function(err, foundIngredient){
    res.json(foundIngredient);
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
