console.log("sanity check is working!!!!");

var recipeHtml;
var recipeTemplate;
var ingredientHtml;
var ingredientTemplate;
var ingredientList = [];


$(document).ready(function() {

  // recipeHtml = $('#recipe-template').html();
  // recipeTemplate = Handlebars.compile(recipeHtml);

  // ingredientHtml = $('#ingredient-template').html();
  // ingredientTemplate = Handlebars.compile(ingredientHtml);

  $(".input-append").on("submit", function(e){
  	e.preventDefault();

    var ingredientData = $(this).serialize();
    var index = ingredientData.indexOf("=");
    var data = ingredientData.slice(index + 1);
    console.log(data);
    // console.log('ingredientData', ingredientData);

    // $.post('/api/ingredients', ingredientData, function(ingredient) {
    //   console.log('ingredient after POST', ingredient);
    //   renderIngredient(ingredient);  //render the server's response
    // });
    // renderIngredient(ingredientData);
	$('.ingredients').append("<div class='items'><div class='item'>" + data + "</div><div class='delete'><button>X</button></div>");
	// $('.ingredients').append( );

  	$(this).trigger("reset");


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

  // $.get('/api/ingredients').success(function(ingredients){
  // 	ingredients.forEach(function(ingredient) {
  // 		renderIngredient(ingredient);
  // 	});
  // });

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
  $('#right-search').prepend(html);
}

function renderRecipe(recipe) {
  // console.log(recipe);
  var html = recipeTemplate(recipe);
  $('#recipes').prepend(html);
}
