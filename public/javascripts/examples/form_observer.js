document.observe("dom:loaded", function() {
  new Form.Element.Observer(
    'search',
    0.5,
    function(element, value) {
      $('spinner').show();
      new Ajax.Updater(
        'results',
        '/examples/form_observer',
        {
          asynchronous:true,
          evalScripts:true,
          // who owns the spinner?
          onComplete:function() {
            Element.hide('spinner')
          },
          parameters: {search : value}
        }
      )
    }
  )
});