$(function(){
	$('.slider__items').slick({
		vertical: true,
		// verticalSwiping: true,
		swipe: false,
		slidesToShow: 1,
		dots: true,
		dotsClass: 'slider-dots',
		arrows: false,
		autoplay: true,	
		speed: 1500,	
	});


	$('.reviews__slider__items').slick({
		arrows: false,
		slidesToShow: 3,
		autoplay: true,
		speed: 1500,
		dots: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1
				}
			}
		]

		
	});

	
	var button = $('.header__menu__btn')
	var menu = $('.header__nav__inner');
	var link = $('.header__nav__inner a');
	button.click(function(){
		button.toggleClass('header__menu__btn__active');
		menu.toggleClass('header__nav__inner__active');
		$('body').toggleClass('lock');
	});

	link.click(function(){
		menu.toggleClass('header__nav__inner__active');
		button.toggleClass('header__menu__btn__active');
		$('body').toggleClass('lock');
	});

});