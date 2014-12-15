test("String ID required", function() {
  expect(1);
  try {
    $("#test1 span").once(function () {});
  }
  catch (e) {
    ok(e, "Error is triggered when ID is not a string.");
  }
});

test(".once('test1-2') properly executed", function() {
  // Create one once('test1-2') call.
  $('#test1 span').once('test1-2').data('test1-2', 'foo');

  // Create another once('test1-2') call.
  $('#test1 span').once('test1-2').data('test1-2', 'bar');

  // The data should result to the first once() call.
  var data = $('#test1 span').data('test1-2');
  ok(data === "foo");
});

test("Called only once with name, counted", function() {
  // Count the number of times once() was called.
  $('#test2 span').data('count', 0);

  // Create the once() callback.
  var callback = function() {
    var count = $('#test2 span').data('count');
    count++;
    $('#test2 span').data('count', count);
  };

  // Call once() a bunch of times.
  for (var i = 0; i < 10; i++) {
    $('#test2 span').once('count').each(callback);
  }

  // Verify that it was only called once.
  var count = $('#test2 span').data('count');
  ok(count === 1, 'It was called ' + count + ' times.');
});

test("Called only once without name, counted", function() {
  // Count the number of times once() was called.
  $('#test2 span').data('once', 0);

  // Create the once() callback.
  var callback = function() {
    var count = $('#test2 span').data('once');
    count++;
    $('#test2 span').data('once', count);
  };

  // Call once() a bunch of times.
  for (var i = 0; i < 10; i++) {
    $('#test2 span').once().each(callback);
  }

  // Verify that it was only called once.
  var count = $('#test2 span').data('once');
  ok(count === 1, 'It was called ' + count + ' times.');
});

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
