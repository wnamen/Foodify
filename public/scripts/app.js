console.log("sanity check is working!!!!");

var recipeUrl = "http://food2fork.com/api/get?key=1b70f7c3dffb5c592b9bb7ae1accc823";

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
  method: "get",
  url: 'http://food2fork.com/api/search?key=1b70f7c3dffb5c592b9bb7ae1accc823',
  dataType: 'JSON',
  success: onSuccess
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

function onSuccess(json){
  var recipes = json.recipes;
  // console.log(recipes);
  recipes.forEach(function(recipe) {
    renderRecipe(recipe);
  });
};
function renderIngredient(ingredient) {
  console.log(ingredient);
  var html = ingredientTemplate(ingredient);
  $('#ingredients').prepend(html);
}

function renderRecipe(recipe) {

  console.log(recipe);
  var html = recipeTemplate(recipe);
  $('#recipes').prepend(html);
}
