
// $(function () {
//   window.sr = ScrollReveal();

//   if ($(window).width() < 768) {
//     if ($(".timeline-content").hasClass("js--fadeInLeft")) {
//       $(".timeline-content")
//         .removeClass("js--fadeInLeft")
//         .addClass("js--fadeInRight");
//     }

//     sr.reveal(".js--fadeInRight", {
//       origin: "right",
//       distance: "300px",
//       easing: "ease-in-out",
//       duration: 800,
//     });
//   } else {
//     sr.reveal(".js--fadeInLeft", {
//       origin: "left",
//       distance: "300px",
//       easing: "ease-in-out",
//       duration: 800,
//     });

//     sr.reveal(".js--fadeInRight", {
//       origin: "right",
//       distance: "300px",
//       easing: "ease-in-out",
//       duration: 800,
//     });
//   }

//   sr.reveal(".js--fadeInLeft", {
//     origin: "left",
//     distance: "300px",
//     easing: "ease-in-out",
//     duration: 800,
//   });

//   sr.reveal(".js--fadeInRight", {
//     origin: "right",
//     distance: "300px",
//     easing: "ease-in-out",
//     duration: 800,
//   });
// });


$(function () {
    var sr = ScrollReveal();
  
    if ($(window).width() < 768) {
      sr.reveal(".education-content", {
        origin: "bottom",
        distance: "100px",
        easing: "ease-in-out",
        duration: 2500,
      });
    } else {
      sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        easing: "ease-in-out",
        duration: 1000,
      });
  
      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
      });
    }
  });
  