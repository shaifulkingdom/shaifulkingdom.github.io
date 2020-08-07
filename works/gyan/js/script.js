//=================================================================================//
//                                banner-part start
//=================================================================================//


$('#banner-part').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 1000,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    fade: false,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//=================================================================================//
//                                banner-part end
//=================================================================================//

//=================================================================================//
//                                about-part start
//=================================================================================//


$('#about-part .about .left').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
//    autoplay: true,
    autoplayspeed: 1000,
    arrows: false,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    fade: false,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//=================================================================================//
//                                about-part end
//=================================================================================//

//=================================================================================//
//                                about-counter-part start
//=================================================================================//

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

//=================================================================================//
//                                about-counter-part end
//=================================================================================//


//=================================================================================//
//                                course-part start
//=================================================================================//


$('#course-part .slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
//    autoplay: true,
    autoplayspeed: 1000,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    fade: false,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//=================================================================================//
//                                course-part end
//=================================================================================//

//=================================================================================//
//                                event-part start
//=================================================================================//


$('#event-part .event .calendar').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
//    autoplay: true,
    autoplayspeed: 1000,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-down down" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-up up" aria-hidden="true"></i>',
    fade: false,
    vertical: true,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//=================================================================================//
//                                event-part end
//=================================================================================//

//=================================================================================//
//                                testi-part start
//=================================================================================//


$('#testi-part .testi .left').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
//    autoplay: true,
    autoplayspeed: 1000,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    fade: false,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//=================================================================================//
//                                testi-part end
//=================================================================================//

//=================================================================================//
//                                footer-part start
//=================================================================================//


$('#footer-part .images').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
//    autoplay: true,
    autoplayspeed: 1000,
    arrows: false,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    fade: false,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
    },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//=================================================================================//
//                                footer-part end
//=================================================================================//
