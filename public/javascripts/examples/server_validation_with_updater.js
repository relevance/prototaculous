document.observe("dom:loaded", function() {
  $("name", "favorite_color").invoke("observe", "blur", function(item) {
    var elem = item.element();
    console.log(elem);
    new Ajax.Updater(elem.id + "_validation", 
											"/prototaculous/validate_field", {
      method: 'post',
      parameters: {field: elem.id, value: elem.value},
      onFailure: function(req) {alert(req.responseText)},
      onException: function(t,e) {alert(e);}
    });
  });
});