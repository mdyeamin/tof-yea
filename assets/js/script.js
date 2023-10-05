(function($){
	'use script';
	// Menu Responsive
	$('.menu').meanmenu({ 
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});
	// Scroll Area
    $('.scroll-area').click(function(){
      	$('html').animate({
        	'scrollTop' : 0,
      	},700);
      	return false;
    });
    $(window).on('scroll',function(){
      	var a = $(window).scrollTop();
      	if(a>400){
            $('.scroll-area').slideDown(300);
        }else{
            $('.scroll-area').slideUp(200);
        }
    });
    //MixItUp Portfolio
	var mixer = mixitup('.portfolio-full');
	var mixer = mixitup('.portF');
	var mixer = mixitup('.portF', {
		selectors: {
			target: '.blog-item'
		},
		animation: {
			duration: 100
		}
	});
	// Portfolio Gallery
	$('.portfolio-item a.zoom').magnificPopup({
	  	type: 'image',
	   	gallery: {
	    	enabled: true
	  	}
	});
	// Client Review
  	$(".client-review-full").owlCarousel({
  		loop:true,
  		center:false,
  		items:2,
  		autoplay: true,
  		mouseDrag:false,
  		nav:true,
  		navText:['<span class="client-review-arrow"><i class="fas fa-chevron-left"></i></span>','<span class="client-review-arrow"><i class="fas fa-chevron-right"></i></span>'],
  		smartSpeed:700,
  		autoplayTimeout:7000,
  		responsive:{
  			0:{
  				items:1
  			},
  			867:{
  				items:2
  			}
  		}
  	});
	// Sticky Menu
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		if(scroll < 150){
			$('.header').removeClass('sticky');
		}else{
			$('.header').addClass('sticky');
		}
	});
	// Counter
	$('.counter').counterUp({
        delay: 10,
        time: 2000
    });
	// Menu Class Add
	$('.menu').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 150,
		scrollThreshold: 0.2
	});
	//Button 1 Style
	$('.button-1')
    .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });
	//Button 2 Style
	$('.button-2')
    .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });
}(jQuery))