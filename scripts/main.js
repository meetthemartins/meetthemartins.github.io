$(document).ready(function() {
  $('.gallery-thumbnail').on('click', function() {
    var name = $(this).attr('data-src').split('/');
    var path = '/images/gallery/' + name[name.length-1];
    $('.gallery-enlarge').attr('src', path);
    $('#gallery-modal').modal('show');
  });
});
