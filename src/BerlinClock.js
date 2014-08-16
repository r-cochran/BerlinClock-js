var BerlinClock = {	
	tick: function(){
		var second = 1;
		BerlinClock.updateSeconds(second);
	},
	updateSeconds: function(second){
		var secondsDiv = document.getElementById("seconds").children[0];
		secondsDiv.classList.add("yellow");
	},
	updateHours: function(hour){

	},
	updateMinutes: function(minute){

	},
	updateClock: function(hour, minute, second){

	},
	reset: function(){

	}
}