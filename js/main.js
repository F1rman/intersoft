$(document).ready(() => {
  let options = {
    mousewheel: true,
    spaceBetween: 800,
    speed: 800,
    hashNavigation: {
      replaceState: true,
      watchState: true,
    },
    nested: true,
    direction: 'horizontal',
    freeMode: true,
    mousewheel: {
      sensitivity: 20,
    },
    simulateTouch: false,
    keyboardControl: true,
    mousewheelControl: true,
    mousewheelForceToAxis: true,
    mousewheelReleaseOnEdges: false,
    // freeModeSticky: true,

  }
  let options_s4 = {
    autoHeight: true,
    spaceBetween: 100,
    slidesPerView: 3,
    centeredSlides: true,
    simulateTouch: false,
    mousewheel: true,
    parallax: true,
    direction: 'horizontal',
    grabCursor: true,


    // freeMode:true
  }

  if ($(window).width() <= 1024 && $(window).width() > 480) {
    console.log('tablet');
    options = {
      spaceBetween: 800,
      hashNavigation: {
        replaceState: true,
        watchState: true,
      },
      direction: 'horizontal',
      freeMode: true,
      // freeModeSticky: true,

    }
    options_s4 = {
      autoHeight: true,
      spaceBetween: 100,
      slidesPerView: 1,
      centeredSlides: true,
      allowTouchMove: true,
      parallax: true,
      nested: true,
      direction: 'horizontal',


      // freeMode:true
    }
  }
  direction = 'horizontal';
  if ($(window).width() < 480) {
    console.log('mobile');
    options = {
      spaceBetween: 200,
      hashNavigation: {
        replaceState: true,
        watchState: true,
      },
      direction: 'vertical',
      freeMode: true,
    }
    options_s4 = {
      nested: true,
      autoHeight: true,
      slidesPerView: 3,
      centeredSlides: true,
      direction: 'horizontal',
      allowTouchMove: true,
      roundLengths: true,
      grabCursor: true,

    }
  }
  console.log(options, options_s4);
  let swiper = initSwiper(direction);

  function initSwiper(direction) {
    return new Swiper('#main_slider', options);
  }
  let swiper_s4 = initSwiper1(direction);

  function initSwiper1(direction) {
    return new Swiper('#s4 .swiper-container', options_s4);
  }

  function changeDirection() {
    isVertical = !isVertical;
    direction = isVertical ? 'vertical' : 'horizontal';
    let slideIndex = swiper.activeIndex;
    swiper.destroy(true, true);
    swiper = initSwiper(direction);
    swiper_s4 = initSwiper1(direction);
    swiper_s4.slideTo(slideIndex, 0);
    swiper.slideTo(slideIndex, 0);
  }
  $(window).resize(function() {
    console.log($(window).width());
    if ($(window).width() > 1024) {
      console.log('desk');

    }
    if ($(window).width() > 480 && $(window).width() < 1024) {

    }
    if ($(window).width() < 480) {
      console.log('mobile');
      swiper.destroy(true, true);
      swiper_s4.destroy(true, true);
      options = {
        // mousewheel: true,
        spaceBetween: 100,
        hashNavigation: {
          replaceState: true,
          watchState: true,
        },
        direction: 'vertical',
        freeMode: true,
      }
      new Swiper('#main_slider', options);

    }
  });
  if ($(window).width() < 480) {
    swiper.on('slideChange', function() {
      if (swiper.activeIndex == 3) {
        swiper.slideTo(3, 600, false)
        console.log('disable big slide');
        swiper.allowSlideNext = false
        swiper.allowSlidePrev = false
      }
    });


        swiper.on('setTranslate', () => {
      if (swiper.activeIndex != 3) {
        console.log('slide 3');
        swiper.allowSlideNext = true
        swiper.allowSlidePrev = true
      }

      // if (swiper.activeIndex == 3 && swiper_s4.activeIndex != swiper_s4.slides.length - 1 && swiper_s4.activeIndex != 0) {
      //   swiper.slideTo(3, 1200, false)
      //   swiper.allowSlideNext = false
      //   swiper.allowSlidePrev = false
      // }

      // if (swiper.activeIndex == 3 && swiper_s4.activeIndex == 0) {
      //   swiper.slideTo(3,1200,false)
      //   swiper.allowSlideNext = false
      //   swiper.allowSlidePrev = true
      // }
    })

    swiper_s4.on('setTranslate', () => {

      if (swiper.activeIndex == 3 && swiper_s4.activeIndex == 0) {
        swiper.slideTo(3, 1200, false)
        swiper.allowSlideNext = false
        swiper.allowSlidePrev = true
      }
      if (swiper.activeIndex == 3 && swiper_s4.activeIndex == swiper_s4.slides.length - 1) {
        swiper.slideTo(3, 1200, false)
        swiper.allowSlideNext = true
        swiper.allowSlidePrev = false
      }

    })

  }
  active_menu()
  if ($(window).width() > 480 && $(window).width() < 1024) {

    swiper.on('touchStart', () => {
      if (swiper.activeIndex == 3) {
        swiper.slideTo(3, 1200, false)
      }
      if (swiper.activeIndex == 3 && swiper_s4.activeIndex != swiper_s4.slides.length - 1 && swiper_s4.activeIndex != 0) {
        swiper.slideTo(3, 1200, false)
        swiper.allowSlideNext = false
        swiper.allowSlidePrev = false
      }
    })
    swiper_s4.on('touchStart', () => {
      if (swiper.activeIndex == 3 && swiper_s4.activeIndex != swiper_s4.slides.length - 1 && swiper_s4.activeIndex != 0) {
        swiper.slideTo(3, 1200, false)
        swiper.allowSlideNext = false
        swiper.allowSlidePrev = false

      }

      if (swiper_s4.activeIndex == swiper_s4.slides.length - 1) {
        console.log('last s4 slide');
        swiper.allowSlideNext = true
        swiper.allowSlidePrev = true
      }
      if (swiper_s4.activeIndex == 0) {
        swiper.allowSlideNext = true
        swiper.allowSlidePrev = true
        console.log('first s4 slide');
      }


    })
  }

  if ($(window).width() > 1024) {
    swiper_s4.on('slideChangeTransitionStart', function() {
      console.log(swiper_s4.slides.length);
      console.log(swiper_s4.activeIndex);
      console.log('slideChangeTransitionStart');
      swiper.mousewheel.disable();
      swiper.slideTo(3, 1200, false)


      // if (swiper_s4.activeIndex>0 && swiper_s4.activeIndex < swiper_s4.slides.length-1) {
      //   swiper.mousewheel.disable();
      //   console.log('disable big slide');
      // }

    });
    swiper_s4.on('slidePrevTransitionEnd', function() {
      console.log(swiper_s4.slides.length);
      console.log(swiper_s4.activeIndex);
      if (swiper_s4.activeIndex == 0) {
        swiper.mousewheel.enable();
        console.log('enable big slide forvard');
      }
    });
    swiper_s4.on('slideNextTransitionEnd', function() {
      console.log('slideNextTransitionStart');
      if (swiper_s4.activeIndex == swiper_s4.slides.length - 1) {
        swiper.mousewheel.enable();
        console.log('enable big slide');
      }

    });

    console.log('desk');
    swiper.on('slideChange', function() {
      active_menu()
      if (swiper.activeIndex == 3) {
        console.log(swiper.activeIndex, 'swiper.activeIndex');
        swiper.slideTo(3, 1200, false)
        console.log('disable big slide');
        // swiper.mousewheel.disable();
        // swiper_s4.mousewheel.enable();
      } else {
        swiper.mousewheel.enable();
      }
    });
  }


  function active_menu() {
    $('#menu  a').removeClass("active");
    if (swiper.activeIndex <= 2) {
      $('#menu  a').removeClass("active");
      $('#menu  .who').addClass("active");
    }
    if (swiper.activeIndex < 6 && swiper.activeIndex > 2) {
      $('#menu  a').removeClass("active");
      $('#menu  .services').addClass("active");
    }
    if (swiper.activeIndex < 8 && swiper.activeIndex > 5) {
      $('#menu  a').removeClass("active");
      $('#menu  .contacts').addClass("active");
    }
  }

  $('.next_page_btn').click(() => {
    swiper.slideNext();
  })
  $('#back_page_btn').click(() => {
    swiper.slidePrev();
  })

  $('.btn_down').click(() => {
    swiper_s4.slideNext();

  })
  $('.btn_contact').click(() => {
    swiper.allowSlideNext = true
    swiper.allowSlidePrev = true
    swiper.slideTo(6, 1200, false)
    $('.modal1').removeClass('active')

  })
  $('.connect_link').click(() => {
    swiper.allowSlideNext = true
    swiper.allowSlidePrev = true
    swiper.slideTo(6, 1200, false)
    $('.modal1').removeClass('active')
  })


  $('.close').click(function() {
    $('.modal1').removeClass('active')
  });
  $('#menu_cont a').click(function() {
    swiper.allowSlideNext = true
    swiper.allowSlidePrev = true
    $('#menu_cont').removeClass('active')
  });


  $('#menu_mobile_btn').click(function() {
    $('#menu_cont').toggleClass('active')
  });
  $('.close_m').click(function() {
    $('#menu_cont').removeClass('active')
  });
  $('#s4 .flex .develop').click(function() {
    $('.modal1.modal0').toggleClass('active')
  });
  $('#s4 .flex .site').click(function() {
    $('.modal2.modal1').toggleClass('active')
  });
  $('#s4 .flex .ux').click(function() {
    $('.modal1.modal3').toggleClass('active')
  });
  $('#s4 .flex .quality').click(function() {
    $('.modal1.modal4').toggleClass('active')
  });
  $('#s4 .flex .suport').click(function() {
    $('.modal1.modal5').toggleClass('active')
  });
  $('#s4 .flex .crm').click(function() {
    $('.modal1.modal6').toggleClass('active')
  });
  $('#s4 .flex .BackOffice').click(function() {
    $('.modal1.modal7').toggleClass('active')
  });
  $('#menu  a').click(function() {
    $('#menu  a').removeClass("active");
    $(this).addClass("active");
  });

  function onMouseWheel(e) {
    console.log(e);
    clearTimeout($.data(this, 'timer'));

    $(".swiper-wrapper").addClass('mousewheel');

    $.data(this, 'timer', setTimeout(function() {
      $(".swiper-wrapper").removeClass('mousewheel')

    }, 250));
  };
  window.addEventListener('mousewheel', onMouseWheel, false)
  window.addEventListener('DOMMouseScroll', onMouseWheel, false)


})
