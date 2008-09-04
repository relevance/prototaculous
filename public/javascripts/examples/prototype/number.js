document.observe("dom:loaded", function() {
	var demos = [
		"(-1).abs()", 
		"(3.14159).ceil()", 
		"(1.5).floor()", 
		"(1.5).round()", 
		"(2).succ()", 
		"(2).times(function() {})", 
		"(255).toColorPart()", 
		"(10).toJSON()", 
		"(10).toPaddedString(5)"
	]  
	demos.each(function(code) {
		var html = "<tr><td>#{code}</td><td>#{result}</td></tr>"
								.interpolate({code: code, result: eval(code)});
		$("demo").insert(html);
	})
});