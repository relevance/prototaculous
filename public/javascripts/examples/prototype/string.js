document.observe("dom:loaded", function() {
	var demos = [
		"'Hangman'.gsub(/[aeiou]/, '_')", 
		"'Hangman'.sub(/[aeiou]/, '_')", 
		"'On and on anon'.truncate(5)", 
		"' spacey '.strip()", 
		"'Hello, <strong>world</strong>'.stripTags()", 
		"'you'.succ()", 
		"'this-is-fun'.camelize()", 
		"'this-is-fun'.dasherize()", 
		"'this-is-fun'.underscore()", 
		"'this-is-fun'.capitalize()", 
		"'http://mysite'.startsWith('http')", 
		"'secret-report.pdf'.endsWith('.pdf')", 
		"''.empty()", 
		"'  '.blank()",
		"'sometimes you #{state}'.interpolate({state: 'feel like a nut'})" 
	]  
	demos.each(function(code) {
		var html = "<tr><td>#{code}</td><td>#{result}</td></tr>"
								.interpolate({code: code, result: eval(code)});
		$("demo").insert(html);
	})
});