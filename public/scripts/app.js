console.log("sanity check is working!!!!");

var recipeHtml;
var recipeTemplate;
var data;

$(document).ready(function() {

  recipeHtml = $('#recipe-template').html();
  recipeTemplate = Handlebars.compile(recipeHtml);

  $(".search-form").on("submit", function(e){
  	e.preventDefault();

    var ingredientData = $(this).serialize();
    var index = ingredientData.indexOf("=");
    data = ingredientData.slice(index + 1);

    $.post('/api/ingredients', ingredientData, function(ingredient) {
      renderIngredient(ingredient);  //render the server's response
    });

  	$(this).trigger("reset");
  });

  // make a get request for top 30 recipes
  $.ajax({
    method: "GET",
    url: '/api/f2fdata',
    dataType: 'JSON',
    success: handleRecipes
  });



  	// $('.item').on('click', function(e) {
  	// 	var test = $(this).attr('id');
  	// 	console.log(test);
  	// });


	$('.ingredients').on('click', '.delete', function(e) {
		console.log("hello");
		e.preventDefault();
		var idName = $(this).attr('id');
		console.log(idName);
		$("#" + idName).remove();
	});
	$('#clear-form').on('click', function(e) {
		e.preventDefault();
		$('.ingredients').empty();
	})

  // make a get request for top 30 recipes
  // $.ajax({
  // method: "get",
  // url: 'http://food2fork.com/api/search?key=1b70f7c3dffb5c592b9bb7ae1accc823',
  // dataType: 'JSON',
  // success: onSuccess
  // });

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
