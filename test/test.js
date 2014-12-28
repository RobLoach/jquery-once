var jsdom = require("mocha-jsdom");
var assert = require("assert");

describe("jQuery Once", function() {
  "use strict";

  /**
   * The global instance of jQuery.
   */
  var $;

  /**
   * Turn the Mocha test environment into a DOM environment with JSDom.
   */
  jsdom();

  /**
   * Before the tests initiate, load jQuery and jQuery Once.
   */
  before(function() {
    $ = require("jquery");
    require("../jquery.once.js");
  });

  it("should require ID to be a string", function () {
    // Build the body HTML.
    document.body.innerHTML = "<p>This is <span>Test 1</span>.</p>";

    // Expect it to throw an error.
    assert.throws(function() {
      $("span").once(function () {
        // Nothing.
      });
    });
  });

  it("properly executes .once('test2')", function () {
    // Prepare the document body.
    document.body.innerHTML = "<p>This is <span>Test 2</span>.</p>";

    // Create one once('test2') call.
    $("span").once("test2").data("test2", "foo");

    // Create another once('test2') call.
    $("span").once("test2").data("test2", "bar");

    // The data should result to the first once() call.
    var data = $("span").data("test2");
    assert.equal(data, "foo");
  });

  it("is called only once with an ID", function() {
    // Prepare the document body.
    document.body.innerHTML = "<p>This is <span>Test 3</span>.</p>";

    // Count the number of times once() was called.
    $("span").data("count", 0);

    // Create the once() callback.
    var callback = function() {
      // Increment the count variable stored in the data.
      $("span").data("count", $("span").data("count") + 1);
    };

    // Call once() a bunch of times.
    for (var i = 0; i < 10; i++) {
      $("span").once("count").each(callback);
    }

    // Verify that it was only called once.
    var count = $("span").data("count");
    assert.equal(count, 1, "It was called " + count + " times.");
  });

  it("is called only once without an ID", function() {
    // Count the number of times once() was called.
    $("span").data("once", 0);

    // Create the once() callback.
    var callback = function() {
      $("span").data("once", $("span").data('once') + 1);
    };

    // Call once() a bunch of times.
    for (var i = 0; i < 10; i++) {
      $('#test2 span').once().each(callback);
    }

    // Verify that it was only called once.
    var count = $('#test2 span').data('once');
    ok(count === 1, 'It was called ' + count + ' times.');
  });

});

/*

test("Apply the value to data correctly", function() {
  // Verify that the element starts without the class.
  var hasData = $('#test3 span').data('jquery-once-test3');
  ok(!hasData, 'Value not applied in the beginning.');

  // Create one once() call.
  $('#test3 span').once('test3');

  // Verify the data is applied.
  hasData = $('#test3 span').data('jquery-once-test3');
  ok(hasData, 'The value is properly applied after once().');
});

test("Remove the value from attribute correctly", function() {
  // Create one once() call.
  $('#test4 span').once('test4');

  // Verify the data is applied.
  var hasData = $('#test4 span').data('jquery-once-test4');
  ok(hasData, 'The value is properly applied after once().');

  // Remove the once property.
  $('#test4 span').removeOnce('test4');
  hasData = $('#test4 span').data('jquery-once-test4');
  ok(!hasData, 'The value is properly removed when called removeOnce().');
});

test("Finding elements correctly through findOnce()", function() {
  // Create one once() call.
  $('#test5 span').once('test5');

  // Find the once'd element through the callback.
  var elements = $('span').findOnce('test5').each(function() {
    var hasData = $(this).data('jquery-once-test5');
    ok(hasData, 'Finding the correct span element after once() through callback.');
  });

  // Find the once'd element without the callback.
  elements = $('span').findOnce('test5');
  elements.each(function() {
    var hasData = $(this).data('jquery-once-test5');
    ok(hasData, 'Finding the correct span element after once().');
  });
});
*/
