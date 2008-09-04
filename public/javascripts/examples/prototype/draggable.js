document.observe("dom:loaded", function() {
	$$("#todo li").each(function(elem) {
		new Draggable(elem, {ghosting:true, revert:true});
		elem.addClassName("todo");
	});
	Droppables.add("done", {
	  accept:"todo", 
	  hoverclass:'hover', 
	  onDrop:function(element){
	    $("done").insert(element);
	  }
	});	
})   