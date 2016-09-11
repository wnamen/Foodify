var db = require("./models");

var ingredientList = [
	{
		ingredient: "avocado",
	},
	{
		ingredient: "tomato",
	},
	{
		ingredient: "onions",
	},
	{
		ingredient: "chicken",
	},
	{
		ingredient: "garlic",
	},
	{
		ingredient: "cilantro",
	},
	{
		ingredient: "potato",
	},
	{
		ingredient: "asparagus",
	},
	{
		ingredient: "steak",
	},
	{
		ingredient: "cucumber",
	}
];


db.Ingredient.remove({}, function(err, ingredients) {
  if(err) { return console.log("ERROR", err); };

    db.Ingredient.create(ingredientList, function(err, ingredients){
      if(err) { return console.log("ERROR", err); };

  });
});
