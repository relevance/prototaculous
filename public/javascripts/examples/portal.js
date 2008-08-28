function onOverWidget(portal, widget) {
  widget.getElement().insertBefore($('control_buttons'), widget.getElement().firstChild);
  $('control_buttons').show();
}
function onOutWidget(portal, widget) {
  $('control_buttons').hide();
}

function removeWidget(element) {
  var widget = $(element).up(".widget").widget;
  if (confirm('Are sure to remove this widget?')) {
    document.body.appendChild($('control_buttons').hide())
    portal.remove(widget);
  }
}
function onChange() {
}

document.observe("dom:loaded", function() {
  var latin1 = "<h2>Totus vestri substructio es belong nobis.</h2>";
  var latin2 = "<p>Roof, roof, roof est in incendia. Nos don't postulo haud unda permissum matris diligo exuro! Exuro, matris diligo, exuro!</p> ";
  var latin3 = "<h3>Quis tantus super Lisp? Quod si Lisp est tantus, quare doesn't sulum utor is? Illa sanus amo rhetoricus questions, tamen vere they have directus refero. Lisp est tantus non propter nonnullus veneficus species promptus tantum ut devoveo, tamen quoniam is est simplex plurrimi validus lingua available. Quod causa sulum doesn't utor is est ut programming lingua es non mereo technologies, tamen mos of mens pariter, quod nusquam changes tardus.</h3> ";
  var portal = new Xilinus.Portal("#page div", {
    onOverWidget: onOverWidget,
    onOutWidget: onOutWidget,
    onChange: onChange,
    removeEffect: Effect.SwitchOff
  });
  portal.add(new Xilinus.Widget().setTitle("Widget #1.0").setContent(latin1), 0);
  portal.add(new Xilinus.Widget().setTitle("Widget #1.1").setContent(latin2), 0);
  portal.add(new Xilinus.Widget().setTitle("Widget #1.2").setContent(latin3), 0);

  portal.add(new Xilinus.Widget().setTitle("Widget #2.0").setContent(latin2 + latin3), 1);
  portal.add(new Xilinus.Widget().setTitle("Widget #2.1").setContent(latin3), 1);

  portal.add(new Xilinus.Widget().setTitle("Widget #1.4").setContent(latin1 + latin2 + latin3), 2);
  // Add controls buttons
  portal.addWidgetControls("control_buttons");
});