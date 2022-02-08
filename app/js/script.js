$(function(){

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

	let mixer = mixitup('.products__inner-box')
});