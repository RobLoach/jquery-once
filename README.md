# jQuery Once

[![Build Status](https://img.shields.io/travis/RobLoach/jquery-once/master.svg)](http://travis-ci.org/RobLoach/jquery-once "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/jquery-once.svg)](https://npmjs.org/package/jquery-once "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/jquery-once.svg)](https://npmjs.org/package/jquery-once "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/RobLoach/jquery-once.svg)](https://david-dm.org/RobLoach/jquery-once)
[![Coverage Status](https://coveralls.io/repos/RobLoach/jquery-once/badge.svg)](https://coveralls.io/r/RobLoach/jquery-once)

Act on [jQuery](http://jquery.com) elements only once.

Filters out all elements that had the same filter applied on them before. It
can be used to ensure that a function is only applied once to an element.

## Install

### [NPM](http://npmjs.org/)
- Use: `require('jquery-once')`
- Install: `npm install --save jquery-once`

### [Browserify](http://browserify.org/)
- Use: `require('jquery-once')`
- Install: `npm install --save jquery-once`
- CDN URL: `//wzrd.in/bundle/jquery-once@2.0.0`

### [Ender](http://enderjs.com)
- Use: `require('jquery-once')`
- Install: `ender add jquery-once`

### [Component](http://github.com/component/component)
- Use: `require('jquery-once')`
- Install: `component install RobLoach/jquery-once`

### [Bower](http://bower.io/)
- Use: `require('jquery-once')`
- Install: `bower install jquery-once`


## Usage

[See the API documentation for more information on how to use jQuery Once.](https://github.com/RobLoach/jquery-once/blob/master/API.md#readme)

``` javascript
// The following will change the color of each paragraph to red, just once
// for the "changecolor" key.
$('p').once('changecolor').css('color', 'red');

// .once() will return a set of elements that yet to have the once ID
// associated with them. You can return to the original collection set by
// using .end().
$('p')
  .once("changecolorblue")
    .css("color", "blue")
  .end()
  .css("color", "red");

// To execute a function on the once set, you can use jQuery's each().
$('div.calendar').once().each(function() {
  // Since there is no once ID provided here, the key will be "once".
});
```


## Development

Install dependencies through [npm](http://npmjs.org):

    npm install

Test with [ESLint](http://eslint.org), [Mocha](http://mochajs.org) and [Mocha
JSDom](https://github.com/rstacruz/mocha-jsdom):

    npm test

Build `jquery.once.min.js` with:

    npm run build

Update API documentation with [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown):

    npm run docs

Tag and publish the new versions to [npm](http://npmjs.com) with [Semantic
Versioning](http://semver.org/):

    git tag 2.0.0
    git push origin 2.0.0
    npm publish


## History
[Discover the change history by heading on over to the `HISTORY.md` file.](HISTORY.md)


## License

Licensed under:

- [GPL-2.0](http://opensource.org/licenses/gpl-2.0.php)
- the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://opensource.org/licenses/MIT)

Copyright &copy; [Rob Loach](http://github.com/RobLoach)
