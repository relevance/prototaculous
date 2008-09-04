j = jQuery;
j(function() {
	j("#highlight").bind("click", function() {
		j(j("#selector").val()).fadeOut(1000).fadeIn(1000);
	});
	j("#markup").html(j("#main").html().escapeHTML());
});