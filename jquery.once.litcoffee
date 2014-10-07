# [jQuery Once](http://github.com/robloach/jquery-once) `2.0.0-alpha.6`

Act on jQuery elements only once.


## Usage

### Universal Module Definition

[jQuery](http://jquery.com) is a dependency, so we wrap the code with a
[UMD](https://github.com/umdjs/umd) pattern in order to allow loading jQuery,
and jQuery Once, in a number of different ways.

    ((factory) ->
      if typeof exports is "object"
        factory require("jquery")
      else if typeof define is "function" and define.amd
        define ["jquery"], factory
      else
        factory jQuery
      return
    ) ($) ->
      cache = {}
      uuid = 0


### `.once()`

Filter elements by whether they have not yet been processed.

#### Parameters

* `id` *(string)* The optional data id used to determine whether the given
  elements have  already been processed or not. When id is not provided, it
  becomes a unique identifier, depicted as a number. The element's data id will
  then be represented in the form of `jquery-once-#`.

#### Returns

jQuery element collection of elements that have now run once by
the given id.

#### Example

``` javascript
// Change the color of the text to green.
$('p').once('changecolor').css('color', 'green');
```

#### Source

      $.fn.once = (id) ->
        if typeof id isnt "string"
          # Generate a numeric ID if the id passed is not a string.
          cache[id] = ++uuid  unless id of cache
          id = cache[id]
        # Filter the elements by which do not have the data yet.
        name = "jquery-once-" + id
        @filter(->
          $(this).data(name) isnt true
        ).data name, true


### `.removeOnce()`

Removes the once data from the given elements, based on the given ID.

#### Parameters

* `id` *string* A required string representing the name of the data id which should be used
when filtering the elements. This only filters elements that have already
been processed by the once function. The id should be the same id that
was originally passed to the once() function.

#### Returns

jQuery element collection of elements that now have their once
data removed.

#### Example

``` javascript
// Remove the once
$('p').removeOnce('changecolor').each(function() {
  // This function is run for each element that had its once data removed.
});
```

#### Source

      $.fn.removeOnce = (id) ->
        # Filter through the elements to find the once'd elements.
        @findOnce(id).removeData "jquery-once-" + id


### `.findOnce()`

Filters elements that have already been processed once.

#### Parameters

* `id` *string* A required string representing the name of the data id which
should be used when filtering the elements. This only filters elements that have
already been processed by the once function. The id should be the same id that
was originally passed to the `.once()` function.

#### Returns

jQuery element collection of elements that have been run once.

#### Example

``` javascript
// Remove the once
$('p').findOnce('changecolor').each(function() {
  // This function is run for each element that has already been run once.
});
```

#### Source

      $.fn.findOnce = (id) ->
        # Filter the elements by which do have the data.
        name = "jquery-once-" + id
        @filter ->
          $(this).data(name) is true

      return
