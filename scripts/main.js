$(document).ready(function() {
  $('.gallery-thumbnail').on('click', function() {
    var newSource = $('img', this).attr('src');
    $('.gallery-enlarge').attr('src', newSource);
    $('#gallery-modal').modal('show');
  });
});