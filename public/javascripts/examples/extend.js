Mammal = Class.create({
  isFurry: function() { return true}
});
Dog = Class.create(Mammal, {
  name: function() { return "Sundance"}
});
var dog = new Dog();

var flight = {
  canFly: function() { return false}
};
Object.extend(dog, flight);

Mammal.addMethods({
  laysEggs: function() { return false;}
});

flight.canFly = function() {return true};

document.observe("dom:loaded", function() {
  var evaluateTableRow = function(columns) {
    columns[1].innerHTML = dog[columns[0].innerHTML]();
  };
  $$("table#sundance tr").each(function(elem, index) {
    var columns = Selector.findChildElements(elem, ["td"]);
    evaluateTableRow.curry(columns).delay(5 * index);
  });
});
