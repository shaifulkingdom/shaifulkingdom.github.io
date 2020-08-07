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
    prevArrow: '<i class="fa fa-arrow-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-arrow-right next" aria-hidden="true"></i>',
    fade: true,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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
//                                venobox start
//=================================================================================//

$('.venobox').venobox({
    spinner: 'wave',
    border: '10px',
    arrowsColor: '#6fda45',
    spinColor: '#6fda45',
});

//=================================================================================//
//                                venobox end
//=================================================================================//

//=================================================================================//
//                                portfolio-part start
//=================================================================================//


$('#portfolio-part .portfolio ul').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 1000,
    arrows: false,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 4,
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
//                                portfolio-part end
//=================================================================================//

//=================================================================================//
//                                services-part start
//=================================================================================//


$('#services-part .services').slick({
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 1000,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-up up" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down down" aria-hidden="true"></i>',
    fade: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//=================================================================================//
//                                services-part end
//=================================================================================//


//=================================================================================//
//                                testi-part start
//=================================================================================//


$('#testi-part .overlay .main').slick({
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
        autoplay: true,
    autoplayspeed: 1000,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-up up" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down down" aria-hidden="true"></i>',
    fade: false,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '#testi-part .overlay .sub',
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('#testi-part .overlay .sub').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    //    autoplay: true,
    //    autoplayspeed: 1000,
    arrows: false,
    prevArrow: '<i class="fa fa-angle-up up" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down down" aria-hidden="true"></i>',
    fade: false,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '#testi-part .overlay .main',
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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
//                                pricing-part start
//=================================================================================//

jQuery(document).ready(function ($) {
    $('#pricing-part .counter .container .details .work .counter').counterUp({
        delay: 10,
        time: 1000
    });
});

//=================================================================================//
//                                testi-part end
//=================================================================================//

//=================================================================================//
//                                team-part start
//=================================================================================//

$('#team-part .client .img').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 1000,
    fade: false,
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//=================================================================================//
//                                team-part end
//=================================================================================//
