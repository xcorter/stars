canvas = '';
interval = '';

Timer.init(60);
AudioPlayer.init();

function drawing() {
	canvas = new Canvas('content');
	$(window).bind("fullscreen-on", function(e) {
		canvas.updateSize();
	});
	for (var i = 0; i < 1000; i++) {
		canvas.moveStars();
		if (Math.random() * 10 > 5) {
			canvas.createStars(10);
		}
	}
	interval = setInterval(
		function() {
			canvas.draw();
			canvas.moveStars();
			if (Math.random() * 10 > 5) {
				canvas.createStars(10);
			}
			Text.setFrame(Timer.getTime());
			Timer.incrementTimer();
		},
		Timer.getPeriod()
	);
	
}

drawing();