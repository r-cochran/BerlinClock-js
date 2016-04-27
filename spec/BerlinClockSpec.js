describe("BerlinClock", function(){
	var red = "red",
		yellow = "yellow",
		none = "";
	beforeEach(function(){
		affix("div#seconds div");
		affix("div#hoursOfFive div+div+div+div");
		affix("div#hoursOfOne div+div+div+div");
		affix("div#minutesOfFive div+div+div+div+div+div+div+div+div+div+div");
		affix("div#minutesOfOne div+div+div+div");
		affix("div#clock");
	});

	describe("tick", function(){
		beforeEach(function(){
			//setup of spies
			spyOn(BerlinClock, "updateSeconds");
			spyOn(BerlinClock, "updateHours");
			spyOn(BerlinClock, "updateMinutes");
			spyOn(BerlinClock, "updateClock");
			spyOn(BerlinClock, "reset");
			//invokaction of the worker function
			BerlinClock.tick();
		});

		it("updates the seconds", function(){
			expect(BerlinClock.updateSeconds).toHaveBeenCalled();
		});

		it("updates the hours", function(){
			expect(BerlinClock.updateHours).toHaveBeenCalled();
		});

		it("updates the minutes", function(){
			expect(BerlinClock.updateMinutes).toHaveBeenCalled();
		});

		it("updates the clock", function(){
			expect(BerlinClock.updateClock).toHaveBeenCalled();
		});

		it("resets the clock, clearing out all colors", function(){
			expect(BerlinClock.reset).toHaveBeenCalled();
		});
	});

	//currently a bug with how remove class works
	xdescribe("reset", function(){
		beforeEach(function(){
			BerlinClock.tick();
		});

		it("removes all red lights", function(){
			BerlinClock.reset();
			expect(document.getElementsByClassName("red").length).toBe(0);
		});

		it("removes all yellow lights", function(){
			BerlinClock.reset();
			expect(document.getElementsByClassName("yellow").length).toBe(0);
		});
	});

	describe("updateSeconds", function(){
		it("marks the seconds as yellow when the second is odd", function(){
			BerlinClock.updateSeconds(1);
			var secondDiv = document.getElementById("seconds").children[0];
			expect(secondDiv.className).toBe(yellow);
		});

		it("marks the seconds as white when the second is even", function(){
			BerlinClock.updateSeconds(2);
			var secondDiv = document.getElementById("seconds").children[0];
			expect(secondDiv.className).not.toBe(yellow);
		});
	});
	
	describe("updateHours", function(){
		var verifyHours = function(children, one, two, three, four){
				expect(children[0].className).toBe(one);
				expect(children[1].className).toBe(two);
				expect(children[2].className).toBe(three);
				expect(children[3].className).toBe(four);
			},
			hoursOfFive = null,
			hoursOfOne = null;	
		describe("the hour is 0", function(){
			beforeEach(function(){
				BerlinClock.updateHours(0);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [O O O O]", function(){
				verifyHours(hoursOfFive.children, none, none, none, none);
			});
			it("has hoursOfOne as [O O O O]", function(){
				verifyHours(hoursOfOne.children, none, none, none, none);
			});
		});
		describe("the hour is 1", function(){
			beforeEach(function(){
				BerlinClock.updateHours(1);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [O O O O]", function(){
				verifyHours(hoursOfFive.children, none, none, none, none);
			});
			it("has hoursOfOne as [R O O O]", function(){
				verifyHours(hoursOfOne.children, red, none, none, none);
			});
		});
		describe("the hour is 2", function(){
			beforeEach(function(){
				BerlinClock.updateHours(2);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [O O O O]", function(){
				verifyHours(hoursOfFive.children, none, none, none, none);
			});
			it("has hoursOfOne as [R R O O]", function(){
				verifyHours(hoursOfOne.children, red, red, none, none);
			});
		});
		describe("the hour is 3", function(){
			beforeEach(function(){
				BerlinClock.updateHours(3);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [O O O O]", function(){
				verifyHours(hoursOfFive.children, none, none, none, none);
			});
			it("has hoursOfOne as [R R R O]", function(){
				verifyHours(hoursOfOne.children, red, red, red, none);
			});
		});
		describe("the hour is 4", function(){
			beforeEach(function(){
				BerlinClock.updateHours(4);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [O O O O]", function(){
				verifyHours(hoursOfFive.children, none, none, none, none);
			});
			it("has hoursOfOne as [R R R R]", function(){
				verifyHours(hoursOfOne.children, red, red, red, red);
			});
		});
		describe("the hour is 5", function(){
			beforeEach(function(){
				BerlinClock.updateHours(5);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R O O O]", function(){
				verifyHours(hoursOfFive.children, red, none, none, none);
			});
			it("has hoursOfOne as [O O O O]", function(){
				verifyHours(hoursOfOne.children, none, none, none, none);
			});
		});
		describe("the hour is 6", function(){
			beforeEach(function(){
				BerlinClock.updateHours(6);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R O O O]", function(){
				verifyHours(hoursOfFive.children, red, none, none, none);
			});
			it("has hoursOfOne as [R O O O]", function(){
				verifyHours(hoursOfOne.children, red, none, none, none);
			});
		});
		describe("the hour is 7", function(){
			beforeEach(function(){
				BerlinClock.updateHours(7);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R O O O]", function(){
				verifyHours(hoursOfFive.children, red, none, none, none);
			});
			it("has hoursOfOne as [R R O O]", function(){
				verifyHours(hoursOfOne.children, red, red, none, none);
			});
		});
		describe("the hour is 8", function(){
			beforeEach(function(){
				BerlinClock.updateHours(8);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R O O O]", function(){
				verifyHours(hoursOfFive.children, red, none, none, none);
			});
			it("has hoursOfOne as [R R R O]", function(){
				verifyHours(hoursOfOne.children, red, red, red, none);
			});
		});
		describe("the hour is 9", function(){
			beforeEach(function(){
				BerlinClock.updateHours(9);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R O O O]", function(){
				verifyHours(hoursOfFive.children, red, none, none, none);
			});
			it("has hoursOfOne as [R R R R]", function(){
				verifyHours(hoursOfOne.children, red, red, red, red);
			});
		});
		describe("the hour is 10", function(){
			beforeEach(function(){
				BerlinClock.updateHours(10);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R O O]", function(){
				verifyHours(hoursOfFive.children, red, red, none, none);
			});
			it("has hoursOfOne as [O O O O]", function(){
				verifyHours(hoursOfOne.children, none, none, none, none);
			});
		});
		describe("the hour is 11", function(){
			beforeEach(function(){
				BerlinClock.updateHours(11);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R O O]", function(){
				verifyHours(hoursOfFive.children, red, red, none, none);
			});
			it("has hoursOfOne as [R O O O]", function(){
				verifyHours(hoursOfOne.children, red, none, none, none);
			});
		});
		describe("the hour is 12", function(){
			beforeEach(function(){
				BerlinClock.updateHours(12);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R O O]", function(){
				verifyHours(hoursOfFive.children, red, red, none, none);
			});
			it("has hoursOfOne as [R R O O]", function(){
				verifyHours(hoursOfOne.children, red, red, none, none);
			});
		});
		describe("the hour is 13", function(){
			beforeEach(function(){
				BerlinClock.updateHours(13);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R O O]", function(){
				verifyHours(hoursOfFive.children, red, red, none, none);
			});
			it("has hoursOfOne as [R R R O]", function(){
				verifyHours(hoursOfOne.children, red, red, red, none);
			});
		});
		describe("the hour is 14", function(){
			beforeEach(function(){
				BerlinClock.updateHours(14);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R O O]", function(){
				verifyHours(hoursOfFive.children, red, red, none, none);
			});
			it("has hoursOfOne as [R R R R]", function(){
				verifyHours(hoursOfOne.children, red, red, red, red);
			});
		});
		describe("the hour is 15", function(){
			beforeEach(function(){
				BerlinClock.updateHours(15);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R R O]", function(){
				verifyHours(hoursOfFive.children, red, red, red, none);
			});
			it("has hoursOfOne as [O O O O]", function(){
				verifyHours(hoursOfOne.children, none, none, none, none);
			});
		});
		describe("the hour is 16", function(){
			beforeEach(function(){
				BerlinClock.updateHours(16);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R R O]", function(){
				verifyHours(hoursOfFive.children, red, red, red, none);
			});
			it("has hoursOfOne as [R O O O]", function(){
				verifyHours(hoursOfOne.children, red, none, none, none);
			});
		});
		describe("the hour is 17", function(){
			beforeEach(function(){
				BerlinClock.updateHours(17);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R R O]", function(){
				verifyHours(hoursOfFive.children, red, red, red, none);
			});
			it("has hoursOfOne as [R R O O]", function(){
				verifyHours(hoursOfOne.children, red, red, none, none);
			});
		});
		describe("the hour is 18", function(){
			beforeEach(function(){
				BerlinClock.updateHours(18);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R R O]", function(){
				verifyHours(hoursOfFive.children, red, red, red, none);
			});	
			it("has hoursOfOne as [R R R O]", function(){
				verifyHours(hoursOfOne.children, red, red, red, none);
			});
		});
		describe("the hour is 19", function(){
			beforeEach(function(){
				BerlinClock.updateHours(19);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R R O]", function(){
				verifyHours(hoursOfFive.children, red, red, red, none);
			});
			it("has hoursOfOne as [R R R R]", function(){
				verifyHours(hoursOfOne.children, red, red, red, red);
			});
		});
		describe("the hour is 20", function(){
			beforeEach(function(){
				BerlinClock.updateHours(20);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R R R]", function(){
				verifyHours(hoursOfFive.children, red, red, red, red);
			});
			it("has hoursOfOne as [O O O O]", function(){
				verifyHours(hoursOfOne.children, none, none, none, none);
			});
		});
		describe("the hour is 21", function(){
			beforeEach(function(){
				BerlinClock.updateHours(21);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R R R]", function(){
				verifyHours(hoursOfFive.children, red, red, red, red);
			});
			it("has hoursOfOne as [R O O O]", function(){
				verifyHours(hoursOfOne.children, red, none, none, none);
			});
		});
		describe("the hour is 22", function(){
			beforeEach(function(){
				BerlinClock.updateHours(22);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R R R]", function(){
				verifyHours(hoursOfFive.children, red, red, red, red);
			});
			it("has hoursOfOne as [R R O O]", function(){
				verifyHours(hoursOfOne.children, red, red, none, none);
			});
		});
		describe("the hour is 23", function(){
			beforeEach(function(){
				BerlinClock.updateHours(23);	
				hoursOfFive = document.getElementById("hoursOfFive");
				hoursOfOne = document.getElementById("hoursOfOne");
			})
			it("has hoursOfFive as [R R R R]", function(){
				verifyHours(hoursOfFive.children, red, red, red, red);
			});
			it("has hoursOfOne as [R R R O]", function(){
				verifyHours(hoursOfOne.children, red, red, red, none);
			});
		});
	});
	describe("updateMinutes", function(){
		var verifyMinutesOfFive = function(five, ten, fifteen, twenty, twentyFive, thirty, thirtyFive, forty, fortyFive, fifty, fiftyFive){
				var children = document.getElementById("minutesOfFive").children;
				expect(children[0].className).toBe(five);
				expect(children[1].className).toBe(ten);
				expect(children[2].className).toBe(fifteen);
				expect(children[3].className).toBe(twenty);
				expect(children[4].className).toBe(twentyFive);
				expect(children[5].className).toBe(thirty);
				expect(children[6].className).toBe(thirtyFive);
				expect(children[7].className).toBe(forty);
				expect(children[8].className).toBe(fortyFive);
				expect(children[9].className).toBe(fifty);
				expect(children[10].className).toBe(fiftyFive);
			},
			verifyMinutesOfOne = function(one, two, three, four){
				var children = document.getElementById("minutesOfOne").children;
				expect(children[0].className).toBe(one);
				expect(children[1].className).toBe(two);
				expect(children[2].className).toBe(three);
				expect(children[3].className).toBe(four);
			};
		describe("the minute is 0", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(0);
			});
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
				verifyMinutesOfFive(
					none, none, none, none, none, none, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});	
		describe("the minute is 1", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(1);
			});
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
				verifyMinutesOfFive(
					none, none, none, none, none, none, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [Y O O O]", function(){
				verifyMinutesOfOne(yellow, none, none, none);
			})
		});
		describe("the minute is 2", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(2);
			});
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
				verifyMinutesOfFive(
					none, none, none, none, none, none, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [Y Y O O]", function(){
				verifyMinutesOfOne(yellow, yellow, none, none);
			})
		});
		describe("the minute is 3", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(3);
			});
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
				verifyMinutesOfFive(
					none, none, none, none, none, none, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [Y Y Y O]", function(){
				verifyMinutesOfOne(yellow, yellow, yellow, none);
			})
		});
		describe("the minute is 4", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(4);
			});
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
				verifyMinutesOfFive(
					none, none, none, none, none, none, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [Y Y Y Y]", function(){
				verifyMinutesOfOne(yellow, yellow, yellow, yellow);
			})
		});
		describe("the minute is 5", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(5);
			});
			it("has minutesOfFive as [Y O O O O O O O O O O]", function(){
				verifyMinutesOfFive(
					yellow, none, none, none, none, none, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});
		describe("the minute is 10", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(10);
			});
			it("has minutesOfFive as [Y Y O O O O O O O O O]", function(){
				verifyMinutesOfFive(
					yellow, yellow, none, none, none, none, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});
		describe("the minute is 15", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(15);
			});
			it("has minutesOfFive as [Y Y R O O O O O O O O]", function(){
				verifyMinutesOfFive(
					yellow, yellow, red, none, none, none, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});
		describe("the minute is 20", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(20);
			});
			it("has minutesOfFive as [Y Y R Y O O O O O O O]", function(){
				verifyMinutesOfFive(
					yellow, yellow, red, yellow, none, none, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});
		describe("the minute is 25", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(25);
			});
			it("has minutesOfFive as [Y Y R Y Y O O O O O O]", function(){
				verifyMinutesOfFive(
					yellow, yellow, red, yellow, yellow, none, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});
		describe("the minute is 30", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(30);
			});
			it("has minutesOfFive as [Y Y R Y Y R O O O O O]", function(){
				verifyMinutesOfFive(
					yellow, yellow, red, yellow, yellow, red, 
					none, none, none, none, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});
		describe("the minute is 35", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(35);
			});
			it("has minutesOfFive as [Y Y R Y Y R Y O O O O]", function(){
				verifyMinutesOfFive(
					yellow, yellow, red, yellow, yellow, red, 
					yellow, none, none, none, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});	
		describe("the minute is 40", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(40);
			});
			it("has minutesOfFive as [Y Y R Y Y R Y Y O O O]", function(){
				verifyMinutesOfFive(
					yellow, yellow, red, yellow, yellow, red, 
					yellow, yellow, none, none, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});	
		describe("the minute is 45", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(45);
			});
			it("has minutesOfFive as [Y Y R Y Y R Y Y R O O]", function(){
				verifyMinutesOfFive(
					yellow, yellow, red, yellow, yellow, red, 
					yellow, yellow, red, none, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});	
		describe("the minute is 50", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(50);
			});
			it("has minutesOfFive as [Y Y R Y Y R Y Y R Y O]", function(){
				verifyMinutesOfFive(
					yellow, yellow, red, yellow, yellow, red, 
					yellow, yellow, red, yellow, none);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});	
		describe("the minute is 55", function(){
			beforeEach(function(){
				BerlinClock.updateMinutes(55);
			});
			it("has minutesOfFive as [Y Y R Y Y R Y Y R Y Y]", function(){
				verifyMinutesOfFive(
					yellow, yellow, red, yellow, yellow, red, 
					yellow, yellow, red, yellow, yellow);
			});
			it("has minutesOfOne as [O O O O]", function(){
				verifyMinutesOfOne(none, none, none, none);
			})
		});	
	});
	describe("updateClock", function(){
		it("adds a leading 0 to seconds when the second is 0", function(){
			BerlinClock.updateClock(0, 0, 0);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("00:00:00");
		});
		it("adds a leading 0 to seconds when the second is 9", function(){
			BerlinClock.updateClock(0, 0, 9);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("00:00:09");
		});
		it("adds a leading 0 to minutess when the minute is 0", function(){
			BerlinClock.updateClock(0, 0, 0);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("00:00:00");
		});
		it("adds a leading 0 to minutes when the minute is 9", function(){
			BerlinClock.updateClock(0, 9, 0);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("00:09:00");
		});
		it("adds a leading 0 to hours when the hour is 0", function(){
			BerlinClock.updateClock(0, 0, 0);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("00:00:00");
		});
		it("adds a leading 0 to hours when the hour is 9", function(){
			BerlinClock.updateClock(9, 0, 0);
			var time = document.getElementById("clock").innerHTML;
			expect(time).toBe("09:00:00");
		});
	});
});