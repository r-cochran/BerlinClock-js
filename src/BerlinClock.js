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
		var redLights = document.getElementsByClassName("red"),
			yellowLights = document.getElementsByClassName("yellow"),
			yellow = "yellow",
			red = "red";
		for(var i = 0; i < redLights.length; i++){
			redLights[i].classList.remove(red);
		}
		for(var i = 0; i < yellowLights.length; i++){
			yellowLights[i].classList.remove(yellow);
		}
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
		document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
	},
	updateSeconds: function(seconds){
		var secondDiv = document.getElementById("seconds").children[0];
		if(seconds % 2 != 0){
			secondDiv.classList.add("yellow");
		}
	},
	updateHours: function(hours){
		var hoursOfFive = document.getElementById("hoursOfFive").children,
			hoursOfOne = document.getElementById("hoursOfOne").children,
			red = "red";
		for(var i = 0; i <= hours / 5 - 1; i++){
			hoursOfFive[i].classList.add(red);
		}
		for(var i = 0; i < hours % 5; i++){
			hoursOfOne[i].classList.add(red);
		}
	},
	updateMinutes: function(minutes){
		var minutesOfFive = document.getElementById("minutesOfFive").children,
			minutesOfOne = document.getElementById("minutesOfOne").children,
			yellow = "yellow",
			red = "red";
		for(var i = 0; i <= minutes / 5 - 1; i++){
			var color = yellow;
			if((i + 1) % 3 == 0){
				color = red;
			}
			minutesOfFive[i].classList.add(color);
		}
		for(var i = 0; i < minutes % 5; i++){
			minutesOfOne[i].classList.add(yellow);
		}	
	}
}
