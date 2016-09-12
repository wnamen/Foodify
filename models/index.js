var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/foodify");

var mongodbUri = "//heroku_nz7cmb4h:2ffgddais5iuiln8h9iqrmndcb@ds029436.mlab.com:29436/heroku_nz7cmb4h";
var db = mongoose.connection;

var Recipe = require('./recipes');
var Ingredient = require('./ingredients');

module.exports.Recipe = Recipe;
module.exports.Ingredient = Ingredient;
