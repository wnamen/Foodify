console.log("sanity check is working!!!!");

var recipeHtml;
var recipeTemplate;


$(document).ready(function() {

  recipeHtml = $('#recipe-template').html();
  recipeTemplate = Handlebars.compile(recipeHtml);

  $.ajax({
  	method: 'GET',
  	url: '/api/recipes',
  	data: 'json',
  	success: handleRecipes
  });

  $('#recipe-form').submit(handleFormSubmit);


});

function handleFormSubmit(e){
	// e.preventDefault();

	$.ajax({
		method: 'POST',
		url: '/api/recipes',
		dataType: 'json',
		data: $('#recipe-form').serializeArray(),
		success: handleRecipes
	});

	$(this).trigger('reset');

}

function handleRecipes(json){
  var recipes = json;
  recipes.forEach(function(recipe) {
    renderRecipe(recipe);
  });
};

function renderRecipe(recipe) {
  // console.log(recipe);
  var html = recipeTemplate(recipe);
  $('#recipes').prepend(html);
}
