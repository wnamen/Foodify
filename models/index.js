var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/foodify");

var Recipe = require('./recipes');

module.exports.Recipe = Recipe;
