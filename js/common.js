head.ready(function() {

	console.log("Coded by Denis Pismenny (www.pismenny.com.ua)");

	smoothScroll.init();

	$(window).scroll(function() {
		if( $(window).scrollTop() > 20 ) {
			$(".nav").fadeIn(800);
		}
		if( $(window).scrollTop() < 20 ) {
			$(".nav").fadeOut(200);
		}
	});

});