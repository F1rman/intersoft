$(document).ready(()=>{
 var swiper = new Swiper('#main_slider', {
    mousewheel: true,
    spaceBetween:800,
    hashNavigation: {
     replaceState: true,
     watchState:true,
   },
    freeMode:true

 });
 var swiper_s4 = new Swiper('#s4 .swiper-container', {
    mousewheel: true,
     // direction: 'vertical',
     nested:true,
     autoHeight: true,
     slidesPerView:3,
     centeredSlides:true,
      parallax: true,
    // freeMode:true
 });
 $('.next_page_btn').click(()=>{
   swiper.slideNext();

 })
 $('.btn_down').click(()=>{
   swiper_s4.slideNext();

 })

 $('#menu  a').click(function(){
   $('#menu  a').removeClass("active");
   $(this).addClass("active");
});
})
