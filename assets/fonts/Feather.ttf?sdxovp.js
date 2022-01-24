// Vanilla JavaScript Code Implement
( function() { 
  /*============ Sticky Header ============*/ 
  const body = document.body;
   let lastScroll = 0;
   window.addEventListener("scroll", () => {
     const currentScroll = window.pageYOffset;
     if (currentScroll <= 0) {
       body.classList.remove("scroll-up");
       return;
     }
     if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
       body.classList.remove("scroll-up");
       body.classList.add("scroll-down");
     } else if (
       currentScroll < lastScroll &&
       body.classList.contains("scroll-down")
     ) {
       body.classList.remove("scroll-down");
       body.classList.add("scroll-up");
     }
     lastScroll = currentScroll;
   });
 } )();


 // Jquery Javascript Code implement
 (function ($) {
	$(document).ready(function () {
    
  /*============ Testimonial ============*/ 
  var owl = $('.slide-one-item');
  $('.slide-one-item').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    smartSpeed: 1500,
    autoplay: true,
    dots: false,
    nav: false,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
  });
  $('.thumbnail li').each(function (slide_index) {
    $(this).click(function (e) {
      owl.trigger('to.owl.carousel', [slide_index, 1500]);
      e.preventDefault();
    })
  })
  owl.on('changed.owl.carousel', function (event) {
    $('.thumbnail li').removeClass('active');
    $('.thumbnail li').eq(event.item.index - 2).addClass('active');
  })
  
	}); 
})(jQuery);







