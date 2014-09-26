jQuery Once
===========

Filters out all elements that had the same filter applied on them before. It can
be used to ensure that a function is only applied once to an element.


Usage
-----

``` javascript
$('div.calendar').once('calendar', function() {
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
$('div.calendar').once(function() {
  // This function is only executed once for each div, even if this
  // code segment is executed repeatedly. Other scripts can't refer
  // to this `once` method. The once data used to store execution are
  // in the form "jquery-once-1", "jquery-once-2", etc.
});
```


Development
-----------

Leverage [npm](http://npmjs.org), [grunt](http://gruntjs.com), and
[qunit](http://qunitjs.com):

``` bash
$ npm install
$ npm test
$ grunt release
```


License
-------

Dual licensed under the [MIT and GPL licenses](LICENSE).


Credits
-------

* [Konstantin Käfer](http://kkaefer.com)
* [Rob Loach](http://robloach.net)
