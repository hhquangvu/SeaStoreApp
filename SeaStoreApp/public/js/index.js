$(document).ready(function() {

	$(window).bind('load', function() {
	});

	$('.vh-image-item-bg').bind('mouseover', function() {
		$(this).next('.vh-image-item-info').fadeIn();
	});

	$('.vh-image-item-info').bind('mouseleave', function() {
		$('.vh-image-item-info').fadeOut();
	});

});
