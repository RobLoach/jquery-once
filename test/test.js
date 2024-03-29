const assert = require('node:assert');
const jsdom = require('mocha-jsdom');

/**
 * Automated tests for jQuery Once.
 */
/* globals describe, it, before, beforeEach */
describe('jQuery Once', () => {
  /**
   * The global instance of jQuery.
   */
  let $;

  /**
   * Turn the Mocha test environment into a DOM environment with JSDom.
   */
  jsdom({
    url: 'http://localhost',
  });

  /**
   * Before the tests initiate, load jQuery and jQuery Once.
   */
  before(() => {
    $ = require('jquery');
    $.once = require('../jquery.once.js');
  });

  /**
   * Before each test, reset the document body so that there is fresh data.
   */
  beforeEach(() => {
    // Build the body HTML.
    /* globals document */
    document.body.innerHTML = '<p>This is the <span>Test</span>.</p>';
  });

  it('should require ID to be a string', () => {
    // Expect it to throw an error.
    assert.throws(() => {
      $('span').once(() => {
        // Nothing.
      });
    });
  });

  it('properly executes .once("test2")', () => {
    // Create one once('test2') call.
    $('span').once('test2').data('test2', 'foo');

    // Create another once('test2') call.
    $('span').once('test2').data('test2', 'bar');

    // The data should result to the first once() call.
    const data = $('span').data('test2');
    assert.strictEqual(data, 'foo');
  });

  it('is called only once with an ID', () => {
    // Count the number of times once() was called.
    $('span').data('count', 0);

    // Create the once() callback.
    const callback = () => {
      // Increment the count variable stored in the data.
      $('span').data('count', $('span').data('count') + 1);
    };

    // Call once() a bunch of times.
    for (let i = 0; i < 10; i++) {
      $('span').once('count').each(callback);
    }

    // Verify that it was only called once.
    const count = $('span').data('count');
    assert.strictEqual(count, 1, 'It was called ' + count + ' times.');
  });

  it('is called only once without an ID', () => {
    // Count the number of times once() was called.
    $('span').data('once', 0);

    // Create the once() callback.
    const callback = () => {
      $('span').data('once', $('span').data('once') + 1);
    };

    // Call once() a bunch of times.
    for (let i = 0; i < 10; i++) {
      $('span').once().each(callback);
    }

    // Verify that it was only called once.
    const count = $('span').data('once');
    assert.strictEqual(count, 1, 'It was called ' + count + ' times.');
  });

  it('retrieves empty once data correctly', () => {
    // Verify that the element starts without the class.
    let hasData = $('span').data('jquery-once-test3');
    assert(!hasData, 'Value not applied in the beginning.');

    // Create one once() call.
    $('span').once('test3');

    // Verify the data is applied.
    hasData = $('span').data('jquery-once-test3');
    assert(hasData, 'The value is properly applied after once().');
  });

  it('calls removeOnce() correctly', () => {
    // Create one once() call.
    $('span').once('test4');

    // Verify the data is applied.
    let hasData = $('span').data('jquery-once-test4');
    assert(hasData, 'The value is properly applied after once().');

    // Remove the once property.
    $('span').removeOnce('test4');
    hasData = $('span').data('jquery-once-test4');
    assert(!hasData, 'The value is properly removed when called removeOnce().');
  });

  it('calls findOnce() correctly', () => {
    // Append an additional span to the end.
    document.body.innerHTML += '<p>This is the <span>Test 2</span>.</p>';

    // Create one once() call.
    $('span').once('test5').data('foo', 'bar');

    // Find the once'd elements.
    $('span').findOnce('test5').each(function () {
      assert.strictEqual($(this).data('foo'), 'bar', 'Found correct span data.');
    });
  });
});
