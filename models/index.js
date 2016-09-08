var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/foodify");

var Recipe = require('./recipes');

module.exports.Recipe = Recipe;
