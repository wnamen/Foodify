var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var IngredientSchema = new Schema({
	ingredient: String
});

var Ingredient = mongoose.model('Ingredient', IngredientSchema);

module.exports = Ingredient;
