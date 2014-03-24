$(document).ready(function() {
	
	///////////////////////////////
	//     PROFILE SETUP         //
	///////////////////////////////
	$(".ask-name .next").click(function() {
		var name = $("#given-name").val();
		if (!name) {
			//currently doesn't work for whatever reason...fix later
			$(".confirm-name .error").removeClass("hidden");
		}
		else {
			$(".confirm-name .error").addClass("hidden");
			$(".confirm-name").removeClass("hidden");
			$(".ask-name").addClass("hidden");
			$("#place-name-here").html(name);
		}
	});

	$(".confirm-name .back").click(function() {
		$(".confirm-name").addClass("hidden");
		$(".ask-name").removeClass("hidden");
	});


	///////////////////////////////
	//       CALIBRATION         //
	///////////////////////////////

});