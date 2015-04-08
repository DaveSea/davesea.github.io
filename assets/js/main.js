
$(document).ready(function (){
	// (logo) scroll to top
	$("#logo").click(function() {
   		$('html, body').animate({
       		scrollTop: $("html").offset().top
   		}, 800);
	});
	// (nav) scroll to About Me
	$("#aboutme").click(function() {
   		$('html, body').animate({
       		scrollTop: $("#about").offset().top
   		}, 800);
	});
	// (nav) scroll to Experience
	$("#myexperience").click(function() {
   		$('html, body').animate({
       		scrollTop: $("#experience").offset().top
   		}, 800);
	});
	// (nav) scroll to Contact
	$(".contactnav").click(function() {
   		$('html, body').animate({
       		scrollTop: $("#contact").offset().top
   		}, 800);
	});
	$('#welcome').bigtext();
});
