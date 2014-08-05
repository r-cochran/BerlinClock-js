var BerlinClock = {
	tick: function(){
		var date = new Date();
		BerlinClock.reset();
		BerlinClock.updateSeconds(date.getSeconds());
		BerlinClock.updateHours(date.getHours());
		BerlinClock.updateMinutes(date.getMinutes());
	},
	reset: function(){
		var hoursOfFive = document.getElementById("hoursOfFive").children,
			hoursOfOne = document.getElementById("hoursOfOne").children,
			minutesOfFive = document.getElementById("minutesOfFive").children,
			minutesOfOne = document.getElementById("minutesOfOne").children,
			yellow = "yellow",
			red = "red";
		for(var i = 0; i < 4; i++){
			hoursOfFive[i].classList.remove(red);
			hoursOfOne[i].classList.remove(red);
			minutesOfOne[i].classList.remove(yellow);
		}
		for(var i = 0; i < 11; i++){
			minutesOfFive[i].classList.remove(red);
			minutesOfFive[i].classList.remove(yellow);
		}
	},
	updateSeconds: function(seconds){
		var secondDiv = document.getElementById("seconds").children[0];
		if(seconds % 2 != 0){
			secondDiv.classList.add("yellow");
		} else {
			secondDiv.classList.remove("yellow");
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
