j = jQuery;
j(function() {
	j("#highlight").bind("click", function() {
		j(j("#selector")[0].value).fadeOut(1000).fadeIn(1000);
	});
	j("#markup").html(j("#main").html().escapeHTML());
});