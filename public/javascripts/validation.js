function validate_name() {
  if ($("name").value.blank()) {
    return "You must specify a name"
  } else {
    return ""
  }
}
function validate_favorite_color() {
  return $("favorite_color").value == "blue" ? "" : "Aaaaaargh!"
}

document.observe("dom:loaded", function() {
  $("name").observe("change", function() {
    $("name_validation").innerHTML = validate_name();
   });
  $("favorite_color").observe("change", function() {
    $("favorite_color_validation").innerHTML = validate_favorite_color();
   });
});