document.observe("dom:loaded", function() {
	new Ajax.Autocompleter('user_favorite_color',
	                       'user_favorite_color_auto_complete',
	                       '/prototaculous/autocomplete', {})
});