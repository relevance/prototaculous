document.observe("dom:loaded", function() {
	Sortable.create("norris_facts", {
	  onUpdate:function(){
	    new Ajax.Request('/prototaculous/sortable', {
	      asynchronous:true,
	      evalScripts:true,
	      parameters:Sortable.serialize("norris_facts")
	    })
	  }}
	);	
});
