$(document).ready(function () {
  const amenities = {};
  $('li input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete amenities[$(this).attr('data-name')];
    }
    $('.amenities h4').text(Object.keys(amenities).sort().join(', '));
  });
});
    
