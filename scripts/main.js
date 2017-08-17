$(document).ready(function() {
  $('.gallery-thumbnail').on('click', function() {
    var newSource = $(this).attr('data-src');
    $('.gallery-enlarge').attr('src', newSource);
    $('#gallery-modal').modal('show');
  });
});
