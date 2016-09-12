var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RecipeSchema = new Schema({
	title: String,
	image: String,
	summary: String,
	ingredients: String 
});

var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;