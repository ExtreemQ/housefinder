




$(window).scroll(function(){
	var scrolling = $(this).scrollTop();
	if(scrolling > 10){
	  $(".bottom_to_top i").fadeIn(500)
	}else{
	  $(".bottom_to_top i").fadeOut(500)
	}
  });
  $(".bottom_to_top i").on('click',function (){
    $('html,body').animate({
      scrollTop:0
    }, 1000);
  });
  


  
$(function (){
    // banner Slide start
    "use strict";
    $('.banner_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        dots: false,
        nextArrow: ".banner_previous",
        prevArrow:".banner_next",
    });

});
    // banner slide end;


