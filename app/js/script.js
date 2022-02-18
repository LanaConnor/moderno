$(function () {

	$(".rate-star").rateYo({
		starWidth: "12px",
		rating: 5,
		readOnly: true
	});
	$(".product-slider__inner").slick({
		dots: true,
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,

	});
	$('.menu__burger').on('click', function(){
		$('.menu__list').slideToggle();
	});
	$('.header__btn-menu').on('click', function(){
		$('.header__box').toggleClass('active');
	});
	let mixer = mixitup('.products__inner-box')
});