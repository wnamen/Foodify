var db = require("./models");

var recipeList = [
  {
    title: "Shells and Cheese",
    image: "http://blogchef.net/wp-content/uploads/2012/01/shells_and_cheese_1.jpg",
    summary: "Step 1: Cook shells according to package directions. Step 2: Meanwhile, in a medium saucepan, melt the butter over medium heat. Stir in flour, salt and pepper. Slowly add the milk and cook while stirring until the mixture becomes somewhat thick. Stir in the cheese until melted. Remove from heat.  Drain shells and add them to the cheese sauce. Stir to coat. Top with green onions for serving if desired. (Makes 4 Servings)",
    ingredients: "Ingredients: 8 ounces shells  medium Shells ¼ cup Butter ¼ cup flour  ½ teaspoon salt 1 dash black pepper 2 cups milk 2 cups shredded cheddar cheese (8 ounces) sliced green onions (optional)"
  },
  {
    title: "Parisian Panino",
    image: "http://www.chowstatic.com/assets/recipe_photos/10608_parisian_panino.jpg",
    summary: "Summary: Preheat the press. Evenly spread 1/4 of the butter on each bread slice and sprinkle with salt. Place 2 bread slices butter side down on a work surface and arrange the half of the cheese on each slice. Place the remaining 2 bread slices down on the work surface and spread half of the tapenade on each slice. Arrange the roast turkey on top of the tapenade and close the sandwich.  Place the sandwiches on the panini press and grill until the cheese is melted and the sandwich is heated though, about 5 minutes.",
    ingredients: "Ingredients: 2 tablespoons (1/4 stick) unsalted butter, softened  4 slices pain au levain, each 1/2-inch thick  4 ounces Port-Salut, fontina, or Gouda cheese, shredded on the large holes of a box grater  2 tablespoon olive tapenade (store-bought is fine)  4 ounces roast turkey breast, thinly sliced"
  },
  {
    title: "Stuffed Tomatoes",
    image: "http://i.ndtvimg.com/i/2015-08/stuffed-tomatoes-625_625x350_51441019923.jpg",
    summary: "Summary: Preheat oven to 400 degrees F.  Slice tomatoes in half horizontally and scoop out pulp and seeds. Salt insides and rest upside down on a sheet pan lined with a wire rack to extract juices, about 15 minutes. Meanwhile, in a medium bowl, mix together bread crumbs, garlic, basil, pepper, 1/4 cup of the grated Parmesan and oil. Stuff tomatoes with the filling, sprinkle with remaining Parmesan, and bake until tomatoes are cooked through and tops are golden brown, about 30 minutes.",
    ingredients: "Ingredients: 2 vine-ripened TomatoesSalt  1/2 cup bread crumbs  1 clove garlic, minced  1/4 cup finely chopped fresh basil leaves Freshly ground black pepper 1/2 cup grated Parmesan 1/4 cup olive oil"
  },
  {
    title: "Veggie Pizza",
    image: "http://images.midwestliving.mdpcdn.com/sites/midwestliving.com/files/styles/slide/public/550_RU204599.jpg?itok=he9S2akU",
    summary: "Summary: 1 Heat oven to 375°F. 2 If using crescent rolls: Unroll both cans of dough; separate dough into 4 long rectangles. In ungreased 15x10x1-inch pan, place dough; press in bottom and up sides to form crust. If using dough sheets: Unroll both cans of dough. In ungreased 15x10x1-inch pan, place dough; press in bottom and up sides to form crust. 3 Bake 13 to 17 minutes or until golden brown. Cool completely, about 30 minutes. 4 In small bowl, mix cream cheese, sour cream, dill and garlic powder until smooth. Spread over crust. Top with vegetables. Serve immediately, or cover and refrigerate 1 to 2 hours before serving. Cut into 8 rows by 4 rows.",
    ingredients: "Ingredients: 2 cans (8 oz each) Pillsbury™ refrigerated crescent dinner rolls or 2 cans (8 oz each) Pillsbury™ Place 'n Bake™ refrigerated crescent rounds or Pillsbury™ refrigerated Crescent Dough Sheet 1 package (8 oz) cream cheese, softened 1/2 cup sour cream 1 teaspoon dried dill weed 1/8 teaspoon garlic powder 1/2 cup small fresh broccoli florets  1/3 cup quartered cucumber slices 1 plum (Roma) tomato, seeded, chopped  1/4 cup shredded carrot "
  },
  {
    title: "Caprese Spaghetti",
    image: "http://images.midwestliving.mdpcdn.com/sites/midwestliving.com/files/styles/slide/public/550_RU204597.jpg?itok=wKxez1Or",
    summary: "Summary: Mix the tomatoes and mozzarella in a large bowl. Add the best available extra-virgin olive oil, oregano, basil leaves, and salt, to taste. When the spaghetti is ready, remove it from the water and add it to the bowl with approximately '1/2' cup of pasta water. Mix well, and serve immediately.",
    ingredients: "Ingredients: 1 pound spaghetti 2 tomatoes, diced 1 pound mozzarella ball, cubed 1/2 cup extra-virgin olive oil 1 teaspoon fresh oregano 4 fresh basil leaves Salt"
  },
  {
    title: "Broccoli Salad",
    image: "http://i.ndtvimg.com/i/2015-01/broccoli-salad_625x350_51422015307.jpg",
    summary: "Summary: Cut the bacon into small pieces and cook over medium heat just until crisp; drain on paper towels. Bring a large saucepan of salted water to a boil. Add the broccoli and blanch until bright green and slightly softened, about 3 minutes. Drain well, run under cold water to stop the cooking, and drain again. In a mixing bowl, combine the mayonnaise, vinegar, onion, sugar and raisins. Add the broccoli and toss the coat with the dressing. Refrigerate for 1 hour.",
    ingredients: "Ingredients: 8 ounces bacon Salt 5 cups small broccoli florets, 1 cup mayonnaise, 1 tablespoon cider vinegar, 1/3 cup chopped onion, 1/4 cup sugar, 3/4 cup raisins, 1/2 cup sunflower kernels"
  },
  {
    title: "Quinoa Sqaush Salad",
    image: "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps174640_SD143204C12_03_2b.jpg",
    summary: "Summary: Drain the quinoa and transfer it to a medium bowl. Add the remaining 2 tablespoons olive oil, the pistachios, cranberries, vinegar, 1/2 teaspoon salt and pepper to taste. Place the spinach in a large mixing bowl and toss with the hot squash until slightly wilted. Add the quinoa mixture and toss again.",
    ingredients: "Ingredients: Butternut Squash, extra virgin olive oil, thyme leaves, kosher salt, pistachios, quinoa, vegetable broth, dried cranberries, white win vinegar, baby spinach"
  },
  {
    title: "Quinoa Tabbouleh",
    image: "http://www.bonappetit.com/wp-content/uploads/2012/05/quinoa-tabbouleh.jpg",
    summary: "Summary: Bring quinoa, 1/2 teaspoon salt, and 1 1/4 cups water to a boil in a medium saucepan over high heat. Reduce heat to medium-low, cover, and simmer until quinoa is tender, about 10 minutes. Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork. Meanwhile, whisk lemon juice and garlic in a small bowl. Gradually whisk in olive oil. Season dressing to taste with salt and pepper. Spread out quinoa on a large rimmed baking sheet; let cool. Transfer to a large bowl; mix in 1/4 cup dressing. DO AHEAD: Can be made 1 day ahead.",
    ingredients: "Ingredients: 1 cup quinoa, rinsed well 1/2 teaspoon kosher salt plus more 2 tablespoon fresh lemon juice 1 garlic clove, minced 1/2 cup extra-virgin olive oil Freshly ground black pepper 1 large English hothouse cucumber or 2 Persian cucumbers, cut into 1/4 pieces 1 pint cherry tomatoes, halved 2/3 cup chopped flat-leaf parsley 1/2 cup chopped fresh mint 2 scallions, thinly sliced"
  },
  {
    title: "Beef Rice Paper Rolls",
    image: "http://www.taste.com.au/images/recipes/tm/2015/01/beef-and-quinoa-rice-paper-rolls-with-tamarind-dipping-sauce-31953_l.jpeg",
    summary: "Summary: Bash steak and marinade in soy or teriyaki sauce for at least one hour or overnight.  Heat a non-stick frypan to high heat, cook steak for 3-4 minutes each side until cooked through. Transfer to a plate to cool. When cold, trim away yucky bits and thinly slice meat.  Place vermicelli in a large bowl, cover with warm or boiling water and leave to soak until softened. Drain, rinse under cold water and drain again. Fill a large bowl with warm water. Dip a sheet of rice paper into the water for about 10 seconds, just until it starts to soften (if you leave it in too long it becomes very tricky to handle), then transfer the sheet to a dinner plate. ",
    ingredients: "Ingredients: 600g rump steak  1/3 cup soy sauce or teriyaki saucepan20 sheets rice paper (gluten-free)  2 carrots, peeled and grated  100g bean thread vermicelli ½ cup fresh coriander leaves, chopped 1 cup satay sauce"
  }
]

// db.Ingredient.remove({}, function(err, ingredients) {
//   if(err) { return console.log("ERROR", err); };

  db.Recipe.remove({}, function(err, recipes) {
    if(err) { return console.log("ERROR", err); };

    // db.Ingredient.create(ingredientList, function(err, ingredients){
    //   if(err) { return console.log("ERROR", err); };

      db.Recipe.create(recipeList, function(err, recipes){
        if(err) { return console.log("ERROR", err); };
        console.log(recipes);
        process.exit();
      });
    });
//   });
// });
