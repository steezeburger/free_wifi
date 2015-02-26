(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();

    (function () {
      var header = document.querySelector("#header");
      if (window.location.hash) {
        header.classList.add("slide--up");
      }

      new Headroom(header, {
        tolerance: {
          down: 10,
          up: 20
        },
        offset: 205,
        classes: {
          initial: "slide",
          pinned: "slide--reset",
          unpinned: "slide--up"
        }
      }).init();

    }());

  }); // end of document ready
})(jQuery); // end of jQuery name space