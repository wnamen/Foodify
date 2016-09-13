console.log("sanity check is working!!!!");

var recipeHtml;
var recipeTemplate;


$(document).ready(function() {

  $('#recipe-form').css('display', 'none');

  recipeHtml = $('#recipe-template').html();
  recipeTemplate = Handlebars.compile(recipeHtml);

  formHtml = $('#form-template').html();
  formTemplate = Handlebars.compile(formHtml);

  // imageHtml = $('#image-template').html();
  // imageTemplate = Handlebars.compile(imageHtml);

  $('#form-toggle').click(function(e){
    e.preventDefault();

    $('#recipe-form').slideToggle('slow');
  })

  $.ajax({
  	method: 'GET',
  	url: '/api/recipes',
  	data: 'json',
  	success: handleRecipes
  });

  $('#recipe-form').submit(handleFormSubmit);
  $('#recipes').on('click', '.delete-recipe', handleDeleteRecipeClick);
  $('#recipes').on('click', '.update-recipe', handleUpdateRecipeClick);
  $('#form-modal').click('#update-save', handleUpdateSubmit);
  $('#recipes').on('click', '.images', handleImageClick);

});

function handleFormSubmit(e){
	$.ajax({
		method: 'POST',
		url: '/api/recipes',
		dataType: 'json',
		data: $('#recipe-form').serializeArray(),
		success: handleRecipes
	});
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

function handleDeleteRecipeClick(e){
	e.preventDefault();
	var $thisButton = $(this);
	var recipeId = $thisButton.parent('div').data('recipe-id');
	console.log($thisButton);

	var url= '/api/recipes/' + recipeId;
	$.ajax({
		method: 'DELETE',
		url: url,
		success: handleRecipeDelete
	});
}

function handleRecipeDelete(data){
	var deletedRecipeId = data._id;
	$('div[data-recipe-id=' + deletedRecipeId + ']').remove();
}

function handleUpdateRecipeClick(e){
	e.preventDefault();
	var $thisButton = $(this);
	console.log($thisButton);
	var recipeId = $thisButton.parent('div').data('recipe-id');

	var url = '/api/recipes/' + recipeId;

	$.ajax({
		method: 'GET',
		url: url,
		data: 'json',
    success: handleForm
	});
}

function handleForm(json) {
  $('#form').empty();

  var html = formTemplate(json);
  $('#form').prepend(html);
}

function handleUpdateSubmit(e){
  var recipeId = $('#update-form').data('recipe-id');

  console.log(recipeId);

  $.ajax({
    method: "PUT",
    url: '/api/recipes/' + recipeId,
    data: $('#update-form').serializeArray(),
    dataType: 'JSON',
    success: handleRecipeUpdate
  });
}

function handleRecipeUpdate(data) {
  var recipeId = data._id;
  $('div[data-recipe-id=' + deletedRecipeId + ']').remove();
  renderRecipe(data);
}

function handleImageClick(e){
  e.preventDefault();
  var image = $(this).attr('src');
  $('#image-preview').attr('src', image);
}
