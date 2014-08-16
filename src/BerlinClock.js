var BerlinClock = {
	tick: function(){
		var date = new Date(),
			hours = date.getHours(),
			minutes = date.getMinutes()
			seconds = date.getSeconds();
		BerlinClock.reset();
		BerlinClock.updateHours(hours);
		BerlinClock.updateMinutes(minutes);
		BerlinClock.updateSeconds(seconds);
		BerlinClock.updateClock(hours, minutes, seconds);
	},
	reset: function(){
		$(".yellow").removeClass("yellow");
		$(".red").removeClass("red");
	},
	updateClock: function(hours, minutes, seconds){
		var fixTime = function(n){
			if(n < 10){
				return "0" + n;
			}
			return n;
		}
		hours = fixTime(hours);
		minutes = fixTime(minutes);
		seconds = fixTime(seconds);
		$("#clock").html(hours + ":" + minutes + ":" + seconds);
	},
	updateSeconds: function(seconds){
		var secondDiv = $("#seconds div").removeClass("yellow");
		if(seconds % 2 != 0){
			secondDiv.addClass("yellow");
		} 
	},
	updateHours: function(hours){
		var hoursOfFive = $("#hoursOfFive div"),
			hoursOfOne = $("#hoursOfOne div"),
			red = "red";
		for(var i = 0; i <= hours / 5 - 1; i++){
			$(hoursOfFive[i]).addClass(red);
		}
		for(var i = 0; i < hours % 5; i++){
			$(hoursOfOne[i]).addClass(red);
		}
	},
	updateMinutes: function(minutes){
		var minutesOfFive = $("#minutesOfFive div"),
			minutesOfOne = $("#minutesOfOne div"),
			yellow = "yellow",
			red = "red";
		for(var i = 0; i <= minutes / 5 - 1; i++){
			var color = yellow;
			if((i + 1) % 3 == 0){
				color = red;
			}
			$(minutesOfFive[i]).addClass(color);
		}
		for(var i = 0; i < minutes % 5; i++){
			$(minutesOfOne[i]).addClass(yellow);
		}	
	}
}
