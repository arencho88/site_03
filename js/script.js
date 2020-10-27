$(function(){

	$('.slider').slick({
		prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/slider_slick-prev.svg" alt=""></button>',
		nextArrow: 	'<button class="slick-arrow slick-next"><img src="../images/slider_slick-next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 440,
				settings:{
					arrows: false
				}	
			}
		]
	});

	$('.header__menu-list-link').on('click', function(){
		$('.header__menu-list-link').removeClass('active');
		$(this).addClass('active');
	});

});