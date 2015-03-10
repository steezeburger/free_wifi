(function ($) {
  $(function () {

    // Back to top button visible on scroll-down
    $(window).scroll(function() {
      if ($(this).scrollTop()) {
        $('#toTop:hidden').stop(true, true).fadeIn();
      } else {
        $('#toTop').stop(true, true).fadeOut();
      }

    });

    // Side nav bar
    $('.button-collapse').sideNav({
      closeOnClick: true
    });

    // Modal init
    $('.modal-trigger').leanModal();

    // Weather widget
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

    // Fullpage init
    $('#fullpage').fullpage({
      autoScrolling: false,
      verticalCentered: true,
      resize: true
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
