document.observe("dom:loaded", function() {
	$("highlight-by-css").observe("click", function() {
		$$($("css-value").value).invoke("highlight");
	});
	$("highlight-by-id").observe("click", function() {
		$($("id-value").value).highlight();
	});                     
	$("markup").innerHTML = $("main").innerHTML.escapeHTML();
});