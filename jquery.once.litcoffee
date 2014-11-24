# [jQuery Once](http://github.com/robloach/jquery-once)

Act on jQuery elements only once.


## API

* [Universal Module Definition](#universal-module-definition)
* [`once()`](#once)
* [`findOnce()`](#findonce)
* [`removeOnce()`](#removeonce)


## Universal Module Definition

[jQuery](http://jquery.com) is a dependency, so we wrap the code with a
[UMD](https://github.com/umdjs/umd) pattern in order to allow loading jQuery,
and jQuery Once, using [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD),
[CommonJS](http://en.wikipedia.org/wiki/CommonJS), or as a global variable.

    ((factory) ->
      if typeof exports is "object"
        factory require("jquery")
      else if typeof define is "function" and define.amd
        define ["jquery"], factory
      else
        factory jQuery
      return
    ) ($) ->
      uuid = 0


## `.once()`

Filter elements by whether they have not yet been processed.

### Parameters

* `id` The data id used to determine whether the given elements have already
been processed or not.

### Returns

jQuery element collection of elements that have now run once by
the given id.

### Example

``` javascript
// Change the color of the text to green.
$('p').once('changecolor').css('color', 'green');
```

### Source

      $.fn.once = (id) ->
        # The id parameter is required.
        throw new Error("An ID is required when calling jQuery.once()") if not id

        # Build the name for the data identifier.
        name = "jquery-once-" + id

        # Filter the elements by which do not have the data yet.
        @filter ->
          $(this).data(name) isnt true
        .data name, true


## `.removeOnce()`

Removes the once data from the given elements, based on the given ID.

### Parameters

* `id` *string* A required string representing the name of the data id which
should be used when filtering the elements. This only filters elements that
have already been processed by the once function. The id should be the same id
that was originally passed to the `.once()` function.

### Returns

jQuery element collection that had their `once` data removed.

### Example

``` javascript
// Remove the once
$('p').removeOnce('changecolor').each(function() {
  // This function is run for each element that had its once data removed.
});
```

### Source

      $.fn.removeOnce = (id) ->
        # Filter through the elements to find the once'd elements.
        @findOnce(id).removeData "jquery-once-" + id


## `.findOnce()`

Filters elements that have already been processed once.

### Parameters

* `id` *string* A required string representing the name of the data id which
should be used when filtering the elements. This only filters elements that have
already been processed by the once function. The id should be the same id that
was originally passed to the `.once()` function.

### Returns

jQuery element collection of elements that have been run once.

### Example

``` javascript
// Remove the once
$('p').findOnce('changecolor').each(function() {
  // This function is run for each element that has already been run once.
});
```

### Source

      $.fn.findOnce = (id) ->
        # Filter the elements by which do have the data.
        name = "jquery-once-" + id
        @filter ->
          $(this).data(name) is true

      return
