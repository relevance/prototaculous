document.observe("dom:loaded", function() {
  $("name", "favorite_color").invoke("observe", "change", function(item) {
    var elem = item.element();
    console.log(elem);
    new Ajax.Request("/examples/validate_field", {
      method: 'post',
      parameters: {field: elem.id, value: elem.value},
      onSuccess: (function(req) {
        console.log(req.responseText);
        $(elem.id + "_validation").update(req.responseText);
      }),
      onFailure: function(req) {alert(req.responseText)},
      onException: function(t,e) {alert(e);}
    });
  });
});