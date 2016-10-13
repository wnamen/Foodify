console.log("sanity check is working!!!!");

var recipeHtml;
var recipeTemplate;
var data;

var ingredientList = "q=";



$(document).ready(function() {

  recipeHtml = $('#recipe-template').html();
  recipeTemplate = Handlebars.compile(recipeHtml);

  var $grid = $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });

  // make a get request for top 30 recipes
  $.ajax({
    method: "GET",
    url: '/api/f2fdata',
    dataType: 'JSON',
    success: handleRecipes
  });

  //adds a carousel feature to the main page
	$('.carousel').carousel();

  //renders ingredients and posts them to the DB
  $("#render-form").on("submit", handleRenderForm);

  //deletes ingredient in search form
  $('.ingredients').on('click', '.delete', handleDeleteClick);

  //clears the ingredients from the search form
  $('#clear-form').on('click', handleClearForm);

  //searches api for query using SEARCH BAR
  $('#search-form').on('submit', handleSearchBar);

  //searches api for ingrediet list query
  $('#ingredient-submit').on('click', handleIngredientSubmit);

  $('.portfolio-item').click(function(e){
    e.preventDefault();
  });
});

function handleRenderForm(e){
  e.preventDefault();

  var ingredientData = $(this).serialize();
  var index = ingredientData.indexOf("=");
  data = ingredientData.slice(index + 1);

  ingredientList += data + "+";
  console.log(ingredientList);

  $.post('/api/ingredients', ingredientData, function(ingredient) {
    renderIngredient(ingredient);  //render the server's response
  });

  $(this).trigger("reset");
}

function handleRecipes(json){

  $('#recipes').remove();
  $('#recipe-area').prepend('<div id="recipes" class="grid"></div>');

  var recipes = json.recipes;
  recipes.forEach(function(recipe) {
    renderRecipe(recipe);
  });

  var $grid = $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });

  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
};

function renderRecipe(recipe) {
  var html = recipeTemplate(recipe);
  $('#recipes').prepend(html);
}

function renderIngredient(ingredient) {
  var temp = data.split("+").join(" ")
  $('.ingredients').append("<button class='delete' id='"+ data + "'>" + temp + "</button>");
}

function handleDeleteClick(e) {
  e.preventDefault();
	var idName = $(this).attr('id');
	$("#" + idName).remove();
  // ingredientList = "q=";

  $.ajax({
    method: "DELETE",
    url: '/api/ingredients/:id',
    success: handleDeleteIngredient
  });
}

function handleDeleteIngredient(json) {
  console.log(json + " had been deleted");
}

function handleClearForm(e){
  e.preventDefault();
  ingredientList = "q=";
	$('.ingredients').empty();
};

function handleIngredientSubmit(e){
  e.preventDefault();
  $("#recipes").empty();

  console.log('handleIngredientSubmit');
  console.log(ingredientList);

  $.ajax({
    method: "GET",
    url: '/api/f2fdata/query',
    dataType: 'JSON',
    data: ingredientList,
    success: handleRecipes
  });

  $(this).trigger("reset");
}

function handleSearchBar(e) {
  e.preventDefault();
  $("#recipes").empty();

  console.log($(this).serialize());

  $.ajax({
    method: "GET",
    url: '/api/f2fdata/query',
    dataType: 'JSON',
    data: $(this).serialize(),
    success: handleRecipes
  });

  $(this).trigger("reset");
}
