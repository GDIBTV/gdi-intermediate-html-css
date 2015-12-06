// Your Javascript file, which is where you create the slider based on the class you used in step 3 (.carousel)

$(document).ready(function(){
	$('.carousel').slick({ /* Creates the slider with the following options */
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000
		
		/* Check http://kenwheeler.github.io/slick/ for more examples of settings you can use! */
	});
});