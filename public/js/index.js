$(document).ready(
		function() {

			$(window).bind('load', function() {
				$('.vh-image-item-price').each(function(i) {
					$(this).text(formatPrice($(this).text()) + ' đ');
				});

			});

			$('.vh-image-item-bg').bind('mouseover', function() {
				$(this).next('.vh-image-item-info').fadeIn();
			});

			$('.vh-image-item-info').bind('mouseleave', function() {
				$('.vh-image-item-info').fadeOut();
			});

			function formatPrice(input) {
				var output = input.substr(0, input.length - 3) + ","
						+ input.substr(input.length - 3);
				return output;
			}

		});
