/**
 * Mocha test runner.
 */
var Mocha = require('mocha');
var path = require('path');

// Create our mocha instance.
var mocha = new Mocha();

// Add all the test files.
mocha.addFile(path.join(__dirname, 'test.js'));

// Run the tests.
mocha.run(function (failures) {
  process.on('exit', function () {
    process.exit(failures);
  });
});
