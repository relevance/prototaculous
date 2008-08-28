load("../../jsspec/config.js");

with(Spec) {
   describe("js-spec", function() { with(this) {

   it("should pass when doing simple comparisons", function() {
   (1).should( equal(1) );
   (1).should( be_less_than(2) );
   (1).should( be_greater_than(0) );
   (1).should_not( equal(2) );
   (1).should( be(1) ); // 'be' checks if it's the same object
   });

  it("should pass when checking if a value is within a delta of another", function() {
  // first argument is the target, second one the maximum allowed difference between both numbers
  (1.0).should( be_close(1.05, 0.1) );
  (1.0).should_not( be_close(1.5, 0.1) );
  });

  it("should pass when checking if a method changes an object", function() {
  [1, 2, 3, 4].should_not( change("length").in_response_to("size") );
  // the next example would also pass if you changed 'to(3)' to 'from(4)' or 'by(-1)'
  [1, 2, 3, 4].should( change("length").to(3).in_response_to("pop") );
  // it also works for functions, and you can even pass parameters to them:
  [1, 2, 3, 4].should( change("first").to(0).in_response_to("unshift", 0) );
  });

  it("should pass when checking how many elements has an enumerable", function() {
  $("some_container").should( have(1, "childElements") );
  [1, 2, 3, 4].should( have(2, "slice", 0, 2) ); // equivalent to [1, 2, 3, 4].slice(0, 2).length.should( equal(2) )
  $("some_container").down("span").should_not( have_at_least(1, "childElements") );

  });

  it("should pass when asking if an enumerable includes some elements", function() {
  [1, 2, 3, 4].should( include(1, 2) );
  [1, 2, 3, 4].should_not( include(0) );
  })

  it("should match strings to regexps", function() {
  "to be or not to be".should_not( match(/^2b|[^b]{2}$/) );
  "Something".should( match(/^[Ss]/) );
  });
  }});
}

Specs.report = "ConsoleReport";
Specs.run();