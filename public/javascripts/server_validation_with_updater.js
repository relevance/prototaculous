document.observe("dom:loaded", function() {
  $("name", "favorite_color").invoke("observe", "change", function(item) {
    var elem = item.element();
    console.log(elem);
    new Ajax.Updater(elem.id + "_validation", "/examples/validate_field", {
      method: 'post',
      parameters: {field: elem.id, value: elem.value},
      onFailure: function(req) {alert(req.responseText)},
      onException: function(t,e) {alert(e);}
    });
  });
});