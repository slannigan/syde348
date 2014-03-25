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
	$('.calib1 .next').click(function() {
		$('.calib1').toggleClass('hidden');
		$(".calib2").toggleClass("hidden");
	});
	$(".calib2 .back").click(function() {
		$(".calib1").toggleClass("hidden");
		$(".calib2").toggleClass("hidden");
	});

	$(".calib2 .next").click(function() {
		$(".calib2").toggleClass("hidden");
		$(".calib3").toggleClass('hidden');
	});
	$(".calib3 .back").click(function() {
		$(".calib2").toggleClass('hidden');
		$(".calib3").toggleClass('hidden');
	})

	$(".calib3 .next").click(function() {
		$(".calib3").toggleClass("hidden");
		$(".calib4").toggleClass('hidden');
	});
	$(".calib4 .back").click(function() {
		$(".calib3").toggleClass('hidden');
		$(".calib4").toggleClass('hidden');
	})

	///////////////////////////////
	//       SETTINGS            //
	///////////////////////////////
	$(".button.angle").click(function() {
		$(".button.angle").removeClass("selected");
		$(this).addClass("selected");
	});

	$(".button.hand").click(function() {
		$(".button.hand").removeClass("selected");
		$(this).addClass("selected");
	});

	$(".button.hold").click(function() {
		$(".button.hold").removeClass("selected");
		$(this).addClass("selected");
	});

	$(".button.animal").click(function() {
		$(".button.animal").removeClass("selected");
		$(this).addClass("selected");
	});


	///////////////////////////////
	//       GAME SELECT         //
	///////////////////////////////
	$(".level").click(function() {
		$(".level").removeClass("selected");
		$(this).addClass("selected");
	});
	$(".level").hover(function() {
		$(this).children(".title").toggleClass("hidden");
		$(this).children(".desc").toggleClass("hidden");
	});


	///////////////////////////////
	//     BOWL PLACEMENT        //
	///////////////////////////////

	//from http://jsfiddle.net/Zevan/QZejF/3/

	var canvas = $("#c");
	var c = canvas[0].getContext("2d");

	var path = "img/bowl-small.png";
	var image = new DragImage(path, 75, 75);

	var loop = setInterval(function() {

	    c.fillStyle = "white";
	    c.fillRect(0, 0, 200, 150);

	    image.update();

	}, 30);

	var mouseX = 0, mouseY = 0;
	var mousePressed = false;
	canvas.mousemove(function(e) {
	  mouseX = e.offsetX;
	  mouseY = e.offsetY;
	})
	 
	$(document).mousedown(function(){
	    mousePressed = true;
	}).mouseup(function(){
	    mousePressed = false;
	});

	function DragImage(src, x, y) {
	    var that = this;
	    var startX = 0, startY = 0;
	    var drag = false;
	    this.x = x;
	    this.y = y;
	    var img = new Image();
	    img.src = src;
	    this.update = function() {
	        if (mousePressed){
	            var left = that.x;
	            var right = that.x + img.width;
	            var top = that.y;
	            var bottom = that.y + img.height;
	            if (!drag){
	              startX = mouseX - that.x;
	              startY = mouseY - that.y;
	            }
	            if (mouseX < right && mouseX > left && mouseY < bottom && mouseY > top){
	               drag = true;
	            }
	        }else{
	           drag = false;
	        }
	        if (drag){
	            that.x = mouseX - startX;
	            that.y = mouseY - startY;
	        }
	        c.drawImage(img, that.x, that.y);
	    }
	}

});