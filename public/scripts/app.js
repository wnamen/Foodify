console.log("sanity check is working!!!!");

var recipeHtml;
var recipeTemplate;
var ingredientHtml;
var ingredientTemplate;


$(document).ready(function() {

  recipeHtml = $('#recipe-template').html();
  recipeTemplate = Handlebars.compile(recipeHtml);

  ingredientHtml = $('#ingredient-template').html();
  ingredientTemplate = Handlebars.compile(ingredientHtml);

  // make a get request for top 30 recipes
  $.ajax({
    method: "GET",
    url: '/api/f2fdata',
    dataType: 'JSON',
    success: handleRecipes
  });

  $('#search-form').on('submit', function(e) {
      e.preventDefault();

      $("#recipes").empty();

      $.ajax({
        method: "GET",
        url: '/api/f2fdata/query',
        dataType: 'JSON',
        data: $(this).serialize(),
        success: handleRecipes
      });

      $(this).trigger("reset");
    });

  // $.get('/api/recipes').success(function(recipes) {
  //   recipes.forEach(function(recipe) {
  // 		// console.log('in here');
  //     renderRecipe(recipe);
  //   });
  // });

  $.get('/api/ingredients').success(function(ingredients){
  	ingredients.forEach(function(ingredient) {
  		renderIngredient(ingredient);
  	});
  });

});

function handleRecipes(json){
  var recipes = json.recipes;
  recipes.forEach(function(recipe) {
    renderRecipe(recipe);
  });
};
function renderIngredient(ingredient) {
  // console.log(ingredient);
  var html = ingredientTemplate(ingredient);
  $('#ingredients').prepend(html);
}

function renderRecipe(recipe) {

  // console.log(recipe);
  var html = recipeTemplate(recipe);
  $('#recipes').prepend(html);
}
