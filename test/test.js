var jsdom = require('mocha-jsdom');
var assert = require('assert');

/**
 * Automated tests for jQuery Once.
 */
/* globals describe, it, before, beforeEach */
describe('jQuery Once', function () {
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
  before(function () {
    $ = require('jquery');
    require('../jquery.once.js');
  });

  /**
   * Before each test, reset the document body so that there is fresh data.
   */
  beforeEach(function () {
    // Build the body HTML.
    /* globals document */
    document.body.innerHTML = '<p>This is the <span>Test</span>.</p>';
  });

  it('should require ID to be a string', function () {
    // Expect it to throw an error.
    assert.throws(function () {
      $('span').once(function () {
        // Nothing.
      });
    });
  });

  it('properly executes .once("test2")', function () {
    // Create one once('test2') call.
    $('span').once('test2').data('test2', 'foo');

    // Create another once('test2') call.
    $('span').once('test2').data('test2', 'bar');

    // The data should result to the first once() call.
    var data = $('span').data('test2');
    assert.equal(data, 'foo');
  });

  it('is called only once with an ID', function () {
    // Count the number of times once() was called.
    $('span').data('count', 0);

    // Create the once() callback.
    var callback = function () {
      // Increment the count variable stored in the data.
      $('span').data('count', $('span').data('count') + 1);
    };

    // Call once() a bunch of times.
    for (var i = 0; i < 10; i++) {
      $('span').once('count').each(callback);
    }

    // Verify that it was only called once.
    var count = $('span').data('count');
    assert.equal(count, 1, 'It was called ' + count + ' times.');
  });

  it('is called only once without an ID', function () {
    // Count the number of times once() was called.
    $('span').data('once', 0);

    // Create the once() callback.
    var callback = function () {
      $('span').data('once', $('span').data('once') + 1);
    };

    // Call once() a bunch of times.
    for (var i = 0; i < 10; i++) {
      $('span').once().each(callback);
    }

    // Verify that it was only called once.
    var count = $('span').data('once');
    assert.equal(count, 1, 'It was called ' + count + ' times.');
  });

  it('retrieves empty once data correctly', function () {
    // Verify that the element starts without the class.
    var hasData = $('span').data('jquery-once-test3');
    assert(!hasData, 'Value not applied in the beginning.');

    // Create one once() call.
    $('span').once('test3');

    // Verify the data is applied.
    hasData = $('span').data('jquery-once-test3');
    assert(hasData, 'The value is properly applied after once().');
  });

  it('calls removeOnce() correctly', function () {
    // Create one once() call.
    $('span').once('test4');

    // Verify the data is applied.
    var hasData = $('span').data('jquery-once-test4');
    assert(hasData, 'The value is properly applied after once().');

    // Remove the once property.
    $('span').removeOnce('test4');
    hasData = $('span').data('jquery-once-test4');
    assert(!hasData, 'The value is properly removed when called removeOnce().');
  });

  it('calls findOnce() correctly', function () {
    // Append an additional span to the end.
    document.body.innerHTML += '<p>This is the <span>Test 2</span>.</p>';

    // Create one once() call.
    $('span').once('test5').data('foo', 'bar');

    // Find the once'd elements.
    $('span').findOnce('test5').each(function () {
      assert.equal($(this).data('foo'), 'bar', 'Found correct span data.');
    });
  });
});
