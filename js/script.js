//=================================================================================//
//                                typing-part-start
//=================================================================================//
var typed = new Typed('.element', {
  strings: [
    'I am a Front-End Developer',
    'PSD To HTML5 Converter',
    'Problem Solver',
    'If you faced any code problem',
    'Or,',
    'You need a Responsive Website',
    'Please, Contact with me. . . '
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
  loopCount: true,
});
//=================================================================================//
//                                typing-part-end
//=================================================================================//

//=================================================================================//
//                                nav-part-start
//=================================================================================//

$("nav ul li").on("click", "a", function () {
  var position = $($(this).attr("href")).offset().top - 50;
  $("html").animate({
    scrollTop: position
  }, 600);
  $("nav ul li a").parent().removeClass("active");
  $(this).parent().addClass("active");
  event.preventDefault();
});

$("#about .about .right p").on("click", ".color", function () {
  var position = $($(this).attr("href")).offset().top - 50;
  $("html").animate({
    scrollTop: position
  }, 600);
  event.preventDefault();
});

// $("#banner-part .overlay .left").on("click", ".hireme", function () {
//   var position = $($(this).attr("href")).offset().top - 190;
//   $("html").animate({
//     scrollTop: position
//   }, 600);
//   event.preventDefault();
// });

// $("#main .about .article p").on("click", ".recentworks", function () {
//   var position = $($(this).attr("href")).offset().top - 190;
//   $("html").animate({
//     scrollTop: position
//   }, 600);
//   event.preventDefault();
// });



//=================================================================================//
//                                Nav-part-end
//=================================================================================//

//=================================================================================//
//                                certification-part-start
//=================================================================================//

$('.venobox').venobox({
  spinner: 'wave',
  arrowsColor: 'goldenrod',
  spinColor: 'goldenrod',
});

//=================================================================================//
//                                certification-part-end
//=================================================================================//