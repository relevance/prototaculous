document.observe("dom:loaded", function() {
	$("top").observe("click", function() {
		$("target").insert({top: $("content").value});
	});
	$("before").observe("click", function() {
		$("target").insert({before: $("content").value});
	});
	$("bottom").observe("click", function() {
		//bottom is the default, no hash needed
		$("target").insert($("content").value);
	});
	$("after").observe("click", function() {
		$("target").insert({after: $("content").value});
	});
})