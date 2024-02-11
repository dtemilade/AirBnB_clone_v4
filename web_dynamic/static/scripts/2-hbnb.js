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

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      if (data.status === 'OK') {
        $("div#api_status").addClass('available');
      } else {
        $("div#api_status").removeClass('available');
      }
    }
  });
});
