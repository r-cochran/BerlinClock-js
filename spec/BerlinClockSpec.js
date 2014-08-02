describe("BerlinClock", function(){
	var berlinClock;
	beforeEach(function(){
		berlinClock = new BerlinClock();
		affix("div#seconds div");
		affix("div#hoursOfFive div+div+div+div");
		affix("div#hoursOfOne div+div+div+div");
		affix("div#minutesOfFive div+div+div+div+div+div+div+div+div+div+div");
		affix("div#minutesOfOne div+div+div+div");
	});

	it("does more stuff", function(){

	});
});