test("Properly executed", function() {
  // Create one once() call.
  $('#test1 span').once(function() {
    $(this).data('test1', 'foobar');
  });

  var data = $('#test1 span').data('test1');
  ok(data === "foobar");
});

test("Called only once", function() {
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
    $('#test2 span').once('count', callback);
  }

  // Verify that it was only called once.
  var count = $('#test2 span').data('count');
  ok(count === 1, 'It was called ' + count + ' times.');
});

test("Apply the value to data correctly", function() {
  // Verify that the element starts without the class.
  var hasData = $('#test3 span').data('jquery-once-test3');
  ok(!hasData, 'Value not applied in the beginning.');

  // Create one once() call.
  $('#test3 span').once('test3', function() {
    // Do nothing.
  });

  // Verify the data is applied.
  hasData = $('#test3 span').data('jquery-once-test3');
  ok(hasData, 'The value is properly applied after once().');
});

test("Remove the value from attribute correctly", function() {
  // Create one once() call.
  $('#test4 span').once('test4', function() {
    // Do nothing.
  });

  // Verify the data is applied.
  var hasData = $('#test4 span').data('jquery-once-test4');
  ok(hasData, 'The value is properly applied after once().');

  // Remove the once property.
  $('#test4 span').removeOnce('test4');
  hasData = $('#test4 span').data('jquery-once-test4');
  ok(!hasData, 'The value is properly removed when called removeOnce().');
});
