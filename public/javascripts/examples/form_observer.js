document.observe("dom:loaded", function() {
  new Form.Element.Observer(
    'search',
    0.5,
    function(element, value) {
      $('spinner').show();
      new Ajax.Updater(
        'results',
        '/prototaculous/form_observer',
        {
          asynchronous:true,
          evalScripts:true,
          // who owns the spinner?
          onComplete:function() {
            $('spinner').hide();
          },
          parameters: {search : value}
        }
      )
    }
  )
});