(function($){
	$(document).ready(function(){
		$('.slider__items').slick({	
			appendArrows: $('.slider__arrows'),
			prevArrow: '<div class="slider__prev"></div>',
			nextArrow: '<div class="slider__next"></div>',
			slidesToShow: 4,
			infinite: true,




		});
	});
})(jQuery);