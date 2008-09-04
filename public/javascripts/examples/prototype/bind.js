document.observe("dom:loaded", function() {
	var oracle = {answer: "Troy will not be defeated as long as Hector lives."}
	var eightBall = {answer: "Concentrate and ask again."}
	var ask = function() {return this.answer};
	$("oracle").update(ask.bind(oracle)());
	$("eight-ball").update(ask.bind(eightBall)());
});