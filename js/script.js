//=================================================================================//
//                                typing-part-start
//=================================================================================//
var typed = new Typed('.element', {
  strings: [
    'I am a Web Designer',
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
//                                nav + main-part-start
//=================================================================================//

$("nav ul li").on("click", "a", function () {
  var position = $($(this).attr("href")).offset().top - 190;
  $("html").animate({
    scrollTop: position
  }, 600);
  $("nav ul li a").parent().removeClass("active");
  $(this).parent().addClass("active");
  event.preventDefault();
});

$("#banner-part .overlay .left").on("click", ".hireme", function () {
  var position = $($(this).attr("href")).offset().top - 190;
  $("html").animate({
    scrollTop: position
  }, 600);
  event.preventDefault();
});

$("#main .about .article p").on("click", ".recentworks", function () {
  var position = $($(this).attr("href")).offset().top - 190;
  $("html").animate({
    scrollTop: position
  }, 600);
  event.preventDefault();
});

$("#main .offer .content p").on("click", ".recentworks", function () {
  var position = $($(this).attr("href")).offset().top - 190;
  $("html").animate({
    scrollTop: position
  }, 600);
  event.preventDefault();
});

//=================================================================================//
//                                Nav + main-part-end
//=================================================================================//
$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read More") {
    $(this).text("Close")
  } else {
    $(this).text("Read More")
  }
});
//=================================================================================//
//                                client-part-start
//=================================================================================//


$('.testimonials-wrapper').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 1000,
  dots: true,
  arrows: false,
  responsive: [{
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//=================================================================================//
//                                client-part-end
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