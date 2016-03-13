 $(function () {
     $.fn.getFloat = function() {
     	return parseFloat($(this).val());
     }
 });

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
		window.plugins.flashlight.switchOn();
		console.log('Work');
		window.plugins.flashlight.available(function(isAvailable) {
  		if (isAvailable) {

		    // switch on
		    window.plugins.flashlight.switchOn(); // success/error callbacks may be passed
		
		    // switch off after 3 seconds
		    setTimeout(function() {
		      window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
		    }, 3000);
		
		  } else {
		    alert("Flashlight not available on this device");
		  }
		});
	});
})
