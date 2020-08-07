//=================================================================================//
//                                banner-part-start
//=================================================================================//

$('#banner-part').slick({
  arrow: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 1000,
  arrows: true,
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  responsive: [{
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

//=================================================================================//
//                                banner-part-end
//=================================================================================//

//=================================================================================//
//                                browse-part-start
//=================================================================================//

$('#browse-part .browse .images').slick({
  arrow: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 1000,
  arrows: true,
  prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  responsive: [{
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
  ]
});

//=================================================================================//
//                                browse-part-end
//=================================================================================//

//=================================================================================//
//                                feature-part-start
//=================================================================================//

$('#feature-part .feature .content').slick({
  arrow: true,
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
  responsive: [{
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//=================================================================================//
//                                feature-part-end
//=================================================================================//