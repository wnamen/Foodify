$(document).ready(function() {

  formHtml = $('#form-template').html();
  formTemplate = Handlebars.compile(formHtml);

  $.ajax({
  	method: 'GET',
  	url: '/api/recipes/:recipeId',
  	dataType: 'json',
  	success: handleForm
  });

  // $('#update-form').submit(handleUpdateSubmit);

});

function handleForm(json) {
  console.log(json);

  var html = formTemplate(json);
  $('#form').prepend(html);
}