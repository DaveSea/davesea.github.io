var navigation = responsiveNav("#nav");

$('#nav li a').on('click', function(){
	var w = $(window).width() / parseFloat($("body").css("font-size"));
	if (typeof navigation != 'undefined' && w <= 40) {
		navigation.toggle();
	}
});

$(function() {

	// Slider - Portfolio pieces
	$('#portfolio_intro .flexslider').flexslider({
		animation: "fade",
		pauseOnHover: true,
		controlNav: true,
		directionNav: true
	});
	
	// Fix widows except in #intro, because localscroll stops working if we do that
	$('.wrap h1, .wrap h2, .wrap h3, .wrap p, footer p').not('#intro .wrap p').widowFix();

	// Slider - Quotes
	$('#quotes .flexslider').flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: false
	});

	// People in charge - prevent click from jumping to top of page
	$('ul.people_thumbs li a').click(function(event){
		event.preventDefault();
	});

});

// Only load if screen is <640px wide
if(Modernizr.mq('only screen and (max-width: 640px)')) {
	$(function() {
		// Accordion effect for Practices
		$('.practice h2').click(function() {
			$(this).next('p').slideToggle(300);
			$(this).toggleClass('practiceArrowDown');
		});
		
		// Smooth scroll header links and #intro slider links - with vertical offset
		$('header, #intro').localScroll({
			duration:2000,
			offset: {
		        top: -30
		    }
		});
		
	});
}

if(Modernizr.mq('only screen and (min-width: 641px) and (max-width: 1059px)')) {
	// Smooth scroll header links and #intro slider links - with vertical offset
	$('header, #intro').localScroll({
		duration:2000,
		offset: {
	        top: -20
	    }
	});
}

// Only load if screen is >760px wide
if(Modernizr.mq('only screen and (min-width: 760px)')) {
	$(function() {
		
		// Slider - Intro
		$('#intro .flexslider').flexslider({
			animation: "fade",
			pauseOnHover: true,
			controlNav: false,
			directionNav: true,
			controlsContainer: ".flex-controls"
		});

	});
}

// Only load if screen is >1060px wide
if(Modernizr.mq('only screen and (min-width: 1060px)')) {
	$(function() {
		// Modal
		$("#portfolio .work a").colorbox({
			width:1040, 
			height:"100%",
			iframe: true,
			fastIframe: false,
			scrolling: true,
			fixed: true,
			onComplete: function() {
		        $("#cboxLoadedContent iframe").contents().find("header, footer, #previousLink").css("display","none");
				$("#cboxLoadedContent iframe").contents().find("#portfolio_intro").css("padding-top","0");
		    }
		});
		
		// Smooth scroll header links and #intro slider links
		$('header, #intro').localScroll({
			duration:2000,
			offset: {
		        top: 0
		    }
		});
		
	});
}

// If touchscreen, bind hover event to first 'click'
if (Modernizr.touch){
	$(function() {
		$('.people_thumbs a').each(function() {
		    var clicked = false;
		    $(this).bind('click', function() {
		        if(!clicked) return !(clicked = true);
		    });
		});
		
		$('.work a').each(function() {
		   var clicked = false;
		   $(this).bind('click', function() {
		       if(!clicked) return !(clicked = true);
		   });
		});
	});
}