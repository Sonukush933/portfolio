var delay = 500;

// Function to animate progress bars
function animateProgressBars() {
  $(".progress-bar").each(function (i) {
    $(this)
      .delay(delay * i)
      .animate({ width: $(this).attr("aria-valuenow") + "%" }, delay);

    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: delay,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now) + "%");
          },
        }
      );
  });
}

// Function to check if element is in view
function isElementInView(el) {
  var windowHeight = $(window).height();
  var windowTop = $(window).scrollTop();
  var windowBottom = windowTop + windowHeight;
  var elementTop = $(el).offset().top;
  var elementBottom = elementTop + $(el).outerHeight();

  return elementTop <= windowBottom && elementBottom >= windowTop;
}

// Trigger animation when page is scrolled
$(window).on("scroll", function () {
  if (isElementInView(".progress-bar")) {
    animateProgressBars();
    // Unbind scroll event to prevent repeated animations
    $(window).off("scroll");
  }
});
