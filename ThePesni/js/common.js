$(function() {

	var link = $('.menu-button');
	var menu = $('.m-menu');
	var close = $('.m-menu__close');
	var body = $('body');

	link.on('click', function(event){
		event.preventDefault();
		menu.toggleClass('m-menu__active');
		body.toggleClass('body-menu-active');
	});

	close.on('click', function(event){
		event.preventDefault();
		menu.toggleClass('m-menu__active');
		body.toggleClass('body-menu-active');
	});

	
	$(document).ready(function() {
    $('.instruction__item').equalHeights();
		$('.principles__wrapper').equalHeights();
	});	 
 	
	$(window).resize(function(){
		$('.instruction__item').height('auto');
		$('.principles__wrapper').height('auto');

		$('.instruction__item').equalHeights();
		$('.principles__wrapper').equalHeights();

		$('.mainlogo_container').css({ height: window.innerHeight - 60});
});


});
