var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/foodify");

var Recipe = require('./recipes');
var Ingredient = require('./ingredients');

module.exports.Recipe = Recipe;
module.exports.Ingredient = Ingredient;
