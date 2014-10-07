
<!-- TITLE/ -->

# jQuery Once

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/RobLoach/jquery-once.png?branch=master)](http://travis-ci.org/RobLoach/jquery-once "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/jquery-once.png)](https://npmjs.org/package/jquery-once "View this project on NPM")
[![Dependency Status](https://david-dm.org/RobLoach/jquery-once.png?theme=shields.io)](https://david-dm.org/RobLoach/jquery-once)
[![Development Dependency Status](https://david-dm.org/RobLoach/jquery-once/dev-status.png?theme=shields.io)](https://david-dm.org/RobLoach/jquery-once#info=devDependencies)<br/>
[![Gittip donate button](http://img.shields.io/gittip/robloach.png)](https://www.gittip.com/robloach/ "Donate weekly to this project using Gittip")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Act on jQuery elements only once.

<!-- /DESCRIPTION -->


Filters out all elements that had the same filter applied on them before. It can
be used to ensure that a function is only applied once to an element.


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('jquery-once')`
- Install: `npm install --save jquery-once`

### [Browserify](http://browserify.org/)
- Use: `require('jquery-once')`
- Install: `npm install --save jquery-once`
- CDN URL: `//wzrd.in/bundle/jquery-once@2.0.0-alpha.6`

### [Ender](http://ender.jit.su/)
- Use: `require('jquery-once')`
- Install: `ender add jquery-once`

### [Component](http://github.com/component/component)
- Use: `require('jquery-once')`
- Install: `component install RobLoach/jquery-once`

### [Bower](http://bower.io/)
- Use: `require('jquery-once')`
- Install: `bower install jquery-once`

<!-- /INSTALL -->


## Usage

### `.once()`

``` javascript
$('div.calendar').once('calendar').each(function() {
  // This function is only executed once for each div, even if this
  // code segment is executed repeatedly.
});
$('div.calendar').once('calendar').click(function() {
  // .once('calendar') filters out all elements which already have been
  // filtered with once(), and the elements that haven't been filtered
  // yet remain. The previous set of elements can be restored with
  // .end().
});
```

It also works without supplying a name:

``` javascript
$('div.calendar').once().each(function() {
  // This function is only executed once for each div, even if this
  // code segment is executed repeatedly. Other scripts can't refer
  // to this `once` method. The once data used to store execution are
  // in the form "jquery-once-1", "jquery-once-2", etc.
});
```

### `.findOnce()`

After `.once()` is used and you need to retrieve all elements that have already
been executed with `.once()`, you can use the `.findOnce() function:

``` javascript
$('div.calendar').findOnce('calendar').each(function() {
  // This function is called for each element that was already called "once"
  // with the "calendar" ID.
});
```

### `.removeOnce()`

It is possible to remove the `.once()` data, and iterate through each element
whose once state is removed:

``` javascript
$('div.calendar').removeOnce('calendar').each(function() {
  // This function is called for each element whose once() data is removed.
});
```


## Development

Install dependencies through [npm](http://npmjs.org):

    npm install

Use [Grunt](http://gruntjs.com) to run [qunit](http://qunitjs.com) tests:

    grunt jshint qunit

Build the project with [Grunt](http://gruntjs.com):

    grunt release

Update project documentation with [Projectz](https://github.com/bevry/projectz):

    npm run-script projectz

Generate code documentation with [JSDoc](http://usejsdoc.org):

    npm run-script jsdoc


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/RobLoach/jquery-once/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- LICENSE/ -->

## License

Licensed under:

- [GPL-2.0](http://opensource.org/licenses/gpl-2.0.php)
- the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://opensource.org/licenses/MIT)

Copyright &copy; Rob Loach (http://github.com/robloach)

<!-- /LICENSE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Rob Loach (https://github.com/robloach)

### Sponsors

No sponsors yet! Will you be the first?

[![Gittip donate button](http://img.shields.io/gittip/robloach.png)](https://www.gittip.com/robloach/ "Donate weekly to this project using Gittip")

### Contributors

These amazing people have contributed code to this project:

- [JohnAlbin](https://github.com/JohnAlbin) — [view contributions](https://github.com/RobLoach/jquery-once/commits?author=JohnAlbin)
- [Rob Loach](https://github.com/RobLoach) <robloach@gmail.com> — [view contributions](https://github.com/RobLoach/jquery-once/commits?author=RobLoach)
- [theodoreb](https://github.com/theodoreb) — [view contributions](https://github.com/RobLoach/jquery-once/commits?author=theodoreb)

[Become a contributor!](https://github.com/RobLoach/jquery-once/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


