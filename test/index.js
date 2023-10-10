/**
 * Mocha test runner.
 */
const path = require('path');
const Mocha = require('mocha');
const process = require('process');

// Create our mocha instance.
const mocha = new Mocha();

// Add all the test files.
mocha.addFile(path.join(__dirname, 'test.js'));

// Run the tests.
mocha.run(function (failures) {
  process.on('exit', function () {
    if (failures) {
      throw new Error(failures);
    }
  });
});
