(function ($) {
  "use strict";

  //Preloader
  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  // AutoMatatic Text Typig
  var typed = new Typed("#typed-name", {
    strings: ["Front-end Developer","Ui/Ux Designer"],
    typeSpeed: 80,
    loop: true,
  });

  // Scroll Down js
  document.addEventListener("DOMContentLoaded", function () {
    var scrollDownBtn = document.getElementById("scrollDownBtn");

    scrollDownBtn.addEventListener("click", function () {
      var heroSectionHeight = document.querySelector(
        ".main-scroll-down-btn"
      ).offsetHeight;
      window.scrollTo({
        top: heroSectionHeight + 100,
        behavior: "smooth",
      });
    });
  });

  // Scroll UP js
  document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

    scrollToTopBtn.addEventListener("click", function () {
      scrollToTop(0, 800);
    });

    function scrollToTop(to, duration) {
      var start = window.pageYOffset || document.documentElement.scrollTop;
      var currentTime = 0;
      var increment = 20; // Increase this value to scroll faster

      var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, to - start, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      animateScroll();
    }

    // Easing function for smooth scrolling
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  });
})(jQuery);

$(window).on("load", function () {
  $(".lightbox").venobox({
    numeratio: true,
    infinigall: true,
  });

  $(".portfolio_item").mixItUp({});
});
