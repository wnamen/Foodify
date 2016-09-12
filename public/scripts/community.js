console.log("sanity check is working!!!!");

var recipeHtml;
var recipeTemplate;
var data;

var ingredientList = "q=";

$(document).ready(function() {

  recipeHtml = $('#recipe-template').html();
  recipeTemplate = Handlebars.compile(recipeHtml);
});

function handleRecipes(json){
  var recipes = json.recipes;
  recipes.forEach(function(recipe) {
    renderRecipe(recipe);
  });
};

function renderRecipe(recipe) {
  // console.log(recipe);
  var html = recipeTemplate(recipe);
  $('#recipes').prepend(html);
}
