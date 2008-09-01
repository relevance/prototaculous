document.observe("dom:loaded", function() {
	var B = {}
	Builder.dump(B);
	$("main").insert(
		B.DIV([
			B.H1("Builder Demo"),
			B.P([
				"Built with ",
				B.EM("Builder!")
			])
		])
	);
})