(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();

    $.simpleWeather({
      location: 'Midtown, OKC',
      woeid: '',
      unit: 'f',
      success: function (weather) {
        html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
        html += '<li class="currently">' + weather.currently + '</li>';

        $("#weather").html(html);
      },
      error: function (error) {
        $("#weather").html('<p>' + error + '</p>');
      }
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
