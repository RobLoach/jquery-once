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
  // .once('calendar') filters out all elements which already have the
  // class 'calendar'. It applies that class to the remaining elements
  // and leaves them in the jQuery object.
  // The previous set of elements can be restored with .end()
});
```

It also works without supplying a name:

``` javascript
$('div.calendar').once(function() {
  // This function is only executed once for each div, even if this
  // code segment is executed repeatedly. Other scripts can't refer
  // to this `once` method and the class names used are in the form
  // of jquery-once-1 and so on.
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

Dual licensed under the MIT and GPL licenses.


Credits
-------

* [Konstantin Käfer](http://kkaefer.com)
* [Rob Loach](http://robloach.net)
