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

var recipeList = [
  {
    title: "Shells and Cheese",
    image: "http://blogchef.net/wp-content/uploads/2012/01/shells_and_cheese_1.jpg",
    ingredients: [
      "food"
    ]
  },
  {
    title: "Parisian Panino",
    image: "http://www.chowstatic.com/assets/recipe_photos/10608_parisian_panino.jpg",
    ingredients: [
      "food"
    ]
  },
  {
    title: "Stuffed Tomatoes",
    image: "http://i.ndtvimg.com/i/2015-08/stuffed-tomatoes-625_625x350_51441019923.jpg",
    ingredients: [
      "food"
    ]
  },
  {
    title: "Veggie Pizza",
    image: "http://images.midwestliving.mdpcdn.com/sites/midwestliving.com/files/styles/slide/public/550_RU204599.jpg?itok=he9S2akU",
    ingredients: [
      "food"
    ]
  },
  {
    title: "Caprese Spaghetti",
    image: "http://images.midwestliving.mdpcdn.com/sites/midwestliving.com/files/styles/slide/public/550_RU204597.jpg?itok=wKxez1Or",
    ingredients: [
      "food"
    ]
  },
  {
    title: "Broccoli Salad",
    image: "http://i.ndtvimg.com/i/2015-01/broccoli-salad_625x350_51422015307.jpg",
    ingredients: [
      "food"
    ]
  },
  {
    title: "Quinoa Sqaush Salad",
    image: "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps174640_SD143204C12_03_2b.jpg",
    ingredients: [
      "food"
    ]
  },
  {
    title: "Quinoa Tabbouleh",
    image: "http://www.bonappetit.com/wp-content/uploads/2012/05/quinoa-tabbouleh.jpg",
    ingredients: [
      "food"
    ]
  },
  {
    title: "Beef Rice Paper Rolls",
    image: "http://www.taste.com.au/images/recipes/tm/2015/01/beef-and-quinoa-rice-paper-rolls-with-tamarind-dipping-sauce-31953_l.jpeg",
    ingredients: [
      "food"
    ]
  }
]

db.Ingredient.remove({}, function(err, ingredients) {
  if(err) { return console.log("ERROR", err); };

  db.Recipe.remove({}, function(err, recipes) {
    if(err) { return console.log("ERROR", err); };

    db.Ingredient.create(ingredientList, function(err, ingredients){
      if(err) { return console.log("ERROR", err); };

      db.Recipe.create(recipeList, function(err, recipes){
        if(err) { return console.log("ERROR", err); };
        console.log(recipeList);
        process.exit();
      });
    });
  });
});
