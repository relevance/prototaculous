document.observe("dom:loaded", function() {
	Sortable.create("norris_facts", {
	  onUpdate:function(){
	    new Ajax.Request('/examples/sortable', {
	      asynchronous:true,
	      evalScripts:true,
	      parameters:Sortable.serialize("norris_facts")
	    })
	  }}
	);	
});
