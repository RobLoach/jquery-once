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
  ok(count === 1);
});

test("Apply the class correctly", function() {
  // Verify that the element starts without the class.
  var hasClass = $('#test3 span').hasClass('test3-processed');
  ok(!hasClass, 'Processed class not applied in the beginning.');

  // Create one once() call.
  $('#test3 span').once('test3', function() {
    // Do nothing.
  });

  // Verify the class is applied.
  hasClass = $('#test3 span').hasClass('test3-processed');
  ok(hasClass, 'The processed class is properly applied after once().');
});

test("Remove the class correctly", function() {
  // Create one once() call.
  $('#test4 span').once('test4', function() {
    // Do nothing.
  });

  // Verify the class is applied.
  var hasClass = $('#test4 span').hasClass('test4-processed');
  ok(hasClass, 'The processed class is properly applied after once().');

  // Remove the once property.
  $('#test4 span').removeOnce('test4');
  hasClass = $('#test4 span').hasClass('test4-processed');
  ok(!hasClass, 'The processed class is properly removed when called removeOnce().');
});
