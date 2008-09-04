document.observe("dom:loaded", function() {
  new PeriodicalExecuter(function() {
    new Ajax.Updater("messages", "/prototaculous/chat", {
      method: "get"
    });
  }, 10);
});