var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RecipeSchema = new Schema({
	title: String,
	image: String,
	ingredients: [ String ]
});

var Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;