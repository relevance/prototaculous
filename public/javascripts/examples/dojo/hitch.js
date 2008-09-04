dojo.addOnLoad(function() {
	var oracle = {answer: "Troy will not be defeated as long as Hector lives."}
	var eightBall = {answer: "Concentrate and ask again."}
	var ask = function() {return this.answer};
	dojo.byId("oracle").innerHTML = dojo.hitch(oracle, ask)();
	dojo.byId("eight-ball").innerHTML = dojo.hitch(eightBall, ask)();
});