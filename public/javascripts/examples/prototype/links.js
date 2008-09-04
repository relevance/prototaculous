document.observe("dom:loaded", function() {
	$$("a[href^=http]").each(function(outboundLink) {
		outboundLink.writeAttribute("target", "_other");
	})
	$$("a[href$=.pdf]").each(function(outboundLink) {
		outboundLink.update(outboundLink.innerHTML + " (PDF) ")
	})
});