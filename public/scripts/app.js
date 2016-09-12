console.log("sanity check is working!!!!");

var recipeHtml;
var recipeTemplate;
var data;

var ingredientList = "q=";

$(document).ready(function() {

  recipeHtml = $('#recipe-template').html();
  recipeTemplate = Handlebars.compile(recipeHtml);

  // make a get request for top 30 recipes
  $.ajax({
    method: "GET",
    url: '/api/f2fdata',
    dataType: 'JSON',
    success: handleRecipes
  });

  //renders ingredients and posts them to the DB
  $("#render-form").on("submit", function(e){
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
  });

  //renders ingredient in search form
	$('.ingredients').on('click', '.delete', function(e) {
		e.preventDefault();
		var idName = $(this).attr('id');
		$("#" + idName).remove();
	});

  //clears the ingredients from the search form
	$('#clear-form').on('click', function(e) {
		e.preventDefault();
    ingredientList = "q=";
		$('.ingredients').empty();
	})

  //searches api for ingrediet list query
  $('#form-submit').on('click', function(e) {
    e.preventDefault();
    $("#recipes").empty();

    $.ajax({
      method: "GET",
      url: '/api/f2fdata/query',
      dataType: 'JSON',
      data: ingredientList,
      success: handleRecipes
    });

    $(this).trigger("reset");
  });


  //searches api for query using search bar
  $('#search-form').on('submit', function(e) {
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
  $('.ingredients').append("<button class='delete' id='"+ data +"'>" + data + "<span> X</span></button>");
}

function renderRecipe(recipe) {
  // console.log(recipe);
  var html = recipeTemplate(recipe);
  $('#recipes').prepend(html);
}
