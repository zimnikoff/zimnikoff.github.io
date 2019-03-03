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

});
