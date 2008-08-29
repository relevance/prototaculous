document.observe("dom:loaded", function() {
  $("off").observe("click", Sound.disable);
  $("on").observe("click", Sound.enable);
  $("play").observe("click", function() {
    Sound.play("/sounds/frontalot-secrets.mp3");
  });
});