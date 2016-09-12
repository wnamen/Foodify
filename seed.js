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

  db.Recipe.remove({}, function(err, recipes) {
    if(err) { return console.log("ERROR", err); };

    db.Ingredient.create(ingredientList, function(err, ingredients){
      if(err) { return console.log("ERROR", err); };

      db.Recipe.create(recipeList, function(err, recipes){
        if(err) { return console.log("ERROR", err); };
        process.exit();
      });
    });
  });
});
