document.observe('dom:loaded', function() {
  $('scale').observe('click', function() {
    new Effect.Scale('scale', 110);
  });
  $('highlight').observe('click', function() {
    new Effect.Highlight('highlight', {
      startcolor: "#2222ff",
      duration: 5
    });
  });
  $('opacity').observe('click', function() {
    new Effect.Opacity('opacity', {
      to: Element.getOpacity('opacity')*0.8
    });
  });
  $('move').observe('click', function() {
    new Effect.Move('move', {x:100, duration: 10});
  });
});