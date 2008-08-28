document.observe("dom:loaded", function() {
  new PeriodicalExecuter(function() {
    new Ajax.Updater("messages", "/examples/chat", {
      method: "get"
    });
  }, 10);
});