/**
 * Mocha test runner.
 */
var path = require('path');
var Mocha = require('mocha');

// Create our mocha instance.
var mocha = new Mocha();

// Add all the test files.
mocha.addFile(path.join(__dirname, 'test.js'));

// Run the tests.
mocha.run(function (failures) {
  process.on('exit', function () {
    throw new Error(failures);
  });
});
