# History

## v2.0.x Unreleased
- Updated development dependencies
- Updated documentation

## v2.0.0 January 20th, 2015
- Fixed type checking of the `id` parameter of `.once()` as optional
  - From [@theodoreb](http://github.com/theodoreb)
- Added performance improvement through [`.data()`](http://api.jquery.com/data/)
use rather than class attributes
- Added `findOnce()` function to allow filtering once'd elements
- Fixed inline code documentation
  - From [@yched](http://github.com/yched)
- Added automated testing through [Mocha](http://mochajs.org)
- Added [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown) to
automatically build API documentation
- Switched to [ESLint](http://eslint.org) for code linting
- Removed unneeded cache variable
- Removed function callback in order to promote jQuery chaining standards

## v1.2.6 August 31, 2013
- Fixed Bower
- Updated documentation

## v1.2.3 June 13, 2013
- Added jquery.once.min.js to the file meta data
- Added removeOnce() test
- Don't limit jQuery.once usage to jQuery 1.8.
- Updated documentation

## v1.2.3 June 13, 2013
- Added tests
- Fixed documentation

## v1.2.1 May 18, 2013
- Added UMD support
- Added Bower support

## v1.2.0 April 5, 2013
- Added jQuery Once
