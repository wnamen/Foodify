console.log("sanity check is working!!!!");

var recipeUrl = "http://food2fork.com/api/get?key=1b70f7c3dffb5c592b9bb7ae1accc823";

var recipeHtml;
var recipeTemplate;
var ingredientHtml;
var ingredientTemplate;

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

$(document).ready(function() {

  recipeHtml = $('#recipe-template').html();
  recipeTemplate = Handlebars.compile(recipeHtml);

  ingredientHtml = $('#ingredient-template').html();
  ingredientTemplate = Handlebars.compile(ingredientHtml);
  // make a get request for all albums

  $.get('/api/recipes').success(function(recipes) {
    recipes.forEach(function(recipe) {
  		// console.log('in here');
      renderRecipe(recipe);
    });
  });

  $.get('/api/ingredients').success(function(ingredients){
  	ingredients.forEach(function(ingredient) {
  		renderIngredient(ingredient);
  	});
  });

});

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
