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
			spyOn(BerlinClock, "updateSeconds");
			spyOn(BerlinClock, "updateHours");
			spyOn(BerlinClock, "updateMinutes");
			spyOn(BerlinClock, "updateClock");
			spyOn(BerlinClock, "reset");
			BerlinClock.tick();
		});

		it("updates the seconds", function(){
			expect(BerlinClock.updateSeconds).toHaveBeenCalled();
		});

		it("updates the hours", function(){

		});

		it("updates the minutes", function(){

		});

		it("updates the clock", function(){

		});

		it("resets the clock, clearing out all colors", function(){

		});
	});

	describe("reset", function(){
		it("removes all red lights", function(){

		});

		it("removes all yellow lights", function(){

		});
	});

	describe("updateSeconds", function(){
		it("marks the seconds as yellow when the second is odd", function(){
			BerlinClock.updateSeconds(1);
			var seconds = document.getElementById("seconds").children[0];
			expect(seconds.className).toBe(yellow);
		});

		it("marks the seconds as white when the second is even", function(){
		});
	});
	
	describe("updateHours", function(){
		describe("the hour is 0", function(){
			it("has hoursOfFive as [O O O O]", function(){
			});
			it("has hoursOfOne as [O O O O]", function(){
			});
		});
		describe("the hour is 1", function(){
			it("has hoursOfFive as [O O O O]", function(){
			});
			it("has hoursOfOne as [R O O O]", function(){
			});
		});
		describe("the hour is 2", function(){
			it("has hoursOfFive as [O O O O]", function(){
			});
			it("has hoursOfOne as [R R O O]", function(){
			});
		});
		describe("the hour is 3", function(){
			it("has hoursOfFive as [O O O O]", function(){
			});
			it("has hoursOfOne as [R R R O]", function(){
			});
		});
		describe("the hour is 4", function(){
			it("has hoursOfFive as [O O O O]", function(){
			});
			it("has hoursOfOne as [R R R R]", function(){
			});
		});
		describe("the hour is 5", function(){
			it("has hoursOfFive as [R O O O]", function(){
			});
			it("has hoursOfOne as [O O O O]", function(){
			});
		});
		describe("the hour is 6", function(){
			it("has hoursOfFive as [R O O O]", function(){
			});
			it("has hoursOfOne as [R O O O]", function(){
			});
		});
		describe("the hour is 7", function(){
			it("has hoursOfFive as [R O O O]", function(){
			});
			it("has hoursOfOne as [R R O O]", function(){
			});
		});
		describe("the hour is 8", function(){
			it("has hoursOfFive as [R O O O]", function(){
			});
			it("has hoursOfOne as [R R R O]", function(){
			});
		});
		describe("the hour is 9", function(){
			it("has hoursOfFive as [R O O O]", function(){
			});
			it("has hoursOfOne as [R R R R]", function(){
			});
		});
		describe("the hour is 10", function(){
			it("has hoursOfFive as [R R O O]", function(){
			});
			it("has hoursOfOne as [O O O O]", function(){
			});
		});
		describe("the hour is 11", function(){
			it("has hoursOfFive as [R R O O]", function(){
			});
			it("has hoursOfOne as [R O O O]", function(){
			});
		});
		describe("the hour is 12", function(){
			it("has hoursOfFive as [R R O O]", function(){
			});
			it("has hoursOfOne as [R R O O]", function(){
			});
		});
		describe("the hour is 13", function(){
			it("has hoursOfFive as [R R O O]", function(){
			});
			it("has hoursOfOne as [R R R O]", function(){
			});
		});
		describe("the hour is 14", function(){
			it("has hoursOfFive as [R R O O]", function(){
			});
			it("has hoursOfOne as [R R R R]", function(){
			});
		});
		describe("the hour is 15", function(){
			it("has hoursOfFive as [R R R O]", function(){
			});
			it("has hoursOfOne as [O O O O]", function(){
			});
		});
		describe("the hour is 16", function(){
			it("has hoursOfFive as [R R R O]", function(){
			});
			it("has hoursOfOne as [R O O O]", function(){
			});
		});
		describe("the hour is 17", function(){
			it("has hoursOfFive as [R R R O]", function(){
			});
			it("has hoursOfOne as [R R O O]", function(){
			});
		});
		describe("the hour is 18", function(){
			it("has hoursOfFive as [R R R O]", function(){
			});	
			it("has hoursOfOne as [R R R O]", function(){
			});
		});
		describe("the hour is 19", function(){
			it("has hoursOfFive as [R R R O]", function(){
			});
			it("has hoursOfOne as [R R R R]", function(){
			});
		});
		describe("the hour is 20", function(){
			it("has hoursOfFive as [R R R R]", function(){
			});
			it("has hoursOfOne as [O O O O]", function(){
			});
		});
		describe("the hour is 21", function(){
			it("has hoursOfFive as [R R R R]", function(){
			});
			it("has hoursOfOne as [R O O O]", function(){
			});
		});
		describe("the hour is 22", function(){
			it("has hoursOfFive as [R R R R]", function(){
			});
			it("has hoursOfOne as [R R O O]", function(){
			});
		});
		describe("the hour is 23", function(){
			it("has hoursOfFive as [R R R R]", function(){
			});
			it("has hoursOfOne as [R R R O]", function(){
			});
		});
	});
	describe("updateMinutes", function(){
		describe("the minute is 0", function(){
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});	
		describe("the minute is 1", function(){
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
			});
			it("has minutesOfOne as [Y O O O]", function(){
			})
		});
		describe("the minute is 2", function(){
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
			});
			it("has minutesOfOne as [Y Y O O]", function(){
			})
		});
		describe("the minute is 3", function(){
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
			});
			it("has minutesOfOne as [Y Y Y O]", function(){
			})
		});
		describe("the minute is 4", function(){
			it("has minutesOfFive as [O O O O O O O O O O O]", function(){
			});
			it("has minutesOfOne as [Y Y Y Y]", function(){
			})
		});
		describe("the minute is 5", function(){
			it("has minutesOfFive as [Y O O O O O O O O O O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});
		describe("the minute is 10", function(){
			it("has minutesOfFive as [Y Y O O O O O O O O O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});
		describe("the minute is 15", function(){
			it("has minutesOfFive as [Y Y R O O O O O O O O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});
		describe("the minute is 20", function(){
			it("has minutesOfFive as [Y Y R Y O O O O O O O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});
		describe("the minute is 25", function(){
			it("has minutesOfFive as [Y Y R Y Y O O O O O O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});
		describe("the minute is 30", function(){
			it("has minutesOfFive as [Y Y R Y Y R O O O O O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});
		describe("the minute is 35", function(){
			it("has minutesOfFive as [Y Y R Y Y R Y O O O O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});	
		describe("the minute is 40", function(){
			it("has minutesOfFive as [Y Y R Y Y R Y Y O O O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});	
		describe("the minute is 45", function(){
			it("has minutesOfFive as [Y Y R Y Y R Y Y R O O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});	
		describe("the minute is 50", function(){
			it("has minutesOfFive as [Y Y R Y Y R Y Y R Y O]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});	
		describe("the minute is 55", function(){
			it("has minutesOfFive as [Y Y R Y Y R Y Y R Y Y]", function(){
			});
			it("has minutesOfOne as [O O O O]", function(){
			})
		});	
	});
	describe("updateClock", function(){
		it("adds a leading 0 to seconds when the second is 0", function(){
		});
		it("adds a leading 0 to seconds when the second is 9", function(){
		});
		it("adds a leading 0 to minutess when the minute is 0", function(){
		});
		it("adds a leading 0 to minutes when the minute is 9", function(){
		});
		it("adds a leading 0 to hours when the hour is 0", function(){
		});
		it("adds a leading 0 to hours when the hour is 9", function(){
		});
	});
});