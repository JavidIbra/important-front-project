$(document).ready(function(){
  
  $('#coruselHero').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    nav: true,
    dots: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
    smartSpeed: 1000
  });
  $('#corusel1').owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    nav: true,
    dots: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
    smartSpeed: 1000
  });


  });

  /*
  items: 1,
				loop: true,
				margin: 0,
				autoplay: true,
				nav: true,
				dots: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				smartSpeed: 1000
  */