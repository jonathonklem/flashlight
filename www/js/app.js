window.strobeInterval = 0;

 $(function () {
     $.fn.getFloat = function() {
     	return parseFloat($(this).val());
     }
 });

function clearStrobe() {
	if (window.strobeInterval) {
		clearInterval(window.strobeInterval);
		window.strobeInterval = 0;
	}

	// if the strobe was on, make sure that the light is in an off state before proceeding
	window.plugins.flashlight.switchOff();
}

$(document).ready(function() {
	$('input').on('change', function () {
		console.log($(this).val());
	});

	$('.about-screen').fadeOut();
	
	$('.nav a').click(function() {
		$('.panel').fadeOut();
		target = $(this).data('target');

		setTimeout(function() {
			$(target).fadeIn();
		}, 300);

		$('.active').removeClass('active');
		$(this).parent().addClass('active');
	});
	
	$('#toggle-flashlight').click(function() {
		clearStrobe();	
		$(this).toggleClass('activeBtn');
		window.plugins.flashlight.toggle(); 
	});
	
	$('#toggle-strobe').click(function() {
		if ($(this).hasClass('activeBtn')) {
			clearStrobe();	
		} else {
			window.plugins.flashlight.switchOn();	// start the strobe in the on state
			window.strobeInterval = setInterval(function() {
				window.plugins.flashlight.toggle();
			}, 200);
		}
		$(this).toggleClass('activeBtn');
	});
})
