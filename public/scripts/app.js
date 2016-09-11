console.log("sanity check is working!!!!");

// var recipeUrl = "http://food2fork.com/api/get?key=1b70f7c3dffb5c592b9bb7ae1accc823";

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
	$('.ingredients').append( "<div class='item'>" + data + "</div>");
  	$(this).trigger("reset");


  });

  // make a get request for top 30 recipes
  // $.ajax({
  // method: "get",
  // url: 'http://food2fork.com/api/search?key=1b70f7c3dffb5c592b9bb7ae1accc823',
  // dataType: 'JSON',
  // success: onSuccess
  // });


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
  $('#right-search').prepend(html);
}

function renderRecipe(recipe) {

  console.log(recipe);
  // var html = recipeTemplate(recipe);
  // $('#recipes').prepend(html);

}
