$(document).ready(() => {

  let options = {
      mousewheel: true,
      spaceBetween: 800,
      hashNavigation: {
        replaceState: true,
        watchState: true,
      },
      direction: 'horizontal',
      // freeMode:true,
  }
  let options_s4 = {
    nested: true,
    autoHeight: true,
    slidesPerView: 3,
    centeredSlides: true,
    parallax: true,
    direction: 'horizontal',
    roundLengths: true,
    grabCursor: true,
    breakpoints: {
      769: {
        slidesPerView: 3,
      },
       640: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,

        }

    },

    // freeMode:true
  }
  direction = 'horizontal';
  if ($(window).width()<480) {
    console.log('mobile');
    options = {
        // mousewheel: true,
        spaceBetween: 0,
        hashNavigation: {
          replaceState: true,
          watchState: true,
        },
        direction: 'vertical',
        freeMode:true,
    }
    options_s4 = {
      nested: true,
      autoHeight: true,
      slidesPerView: 3,
      centeredSlides: true,
      parallax: true,
      direction: 'vertical',
      roundLengths: true,
      grabCursor: true,
      breakpoints: {
        769: {
          slidesPerView: 3,
        },
         640: {
            slidesPerView: 2,
          }

    }
  }
}
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
  swiper_s4.slideTo(slideIndex,0);
  swiper.slideTo(slideIndex,0);
}


  active_menu()

  swiper.on('slideChange', function() {
    active_menu()
    console.log(swiper.activeIndex);

  });

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
  $('.close').click(function() {
    $('.modal1').removeClass('active')
  });
  $('#menu_cont a').click(function() {
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
})
