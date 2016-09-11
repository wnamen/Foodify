console.log("sanity check is working!!!!");

var recipeHtml;
var recipeTemplate;
var data;

$(document).ready(function() {

  recipeHtml = $('#recipe-template').html();
  recipeTemplate = Handlebars.compile(recipeHtml);

  $(".input-append").on("submit", function(e){
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
  $('#right-search').append("<div class='items'><div class='item'>" + data + "</div><div class='delete'><button>X</button></div>");
}

function renderRecipe(recipe) {
  // console.log(recipe);
  var html = recipeTemplate(recipe);
  $('#recipes').prepend(html);
}
