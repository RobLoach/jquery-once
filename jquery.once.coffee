###
# jQuery Once `2.0.0-alpha.10`
# http://github.com/robloach/jquery-once
#
# Act on jQuery elements only once.
#
# - [MIT](http://www.opensource.org/licenses/mit-license.php)
# - [GPL-2.0](http://www.gnu.org/licenses/gpl.html)
###

###
# Universal Module Definition
#
# [jQuery](http://jquery.com) is a dependency, so we wrap the code with a
# [UMD](https://github.com/umdjs/umd) pattern in order to allow loading jQuery,
# and jQuery Once, using [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD),
# [CommonJS](http://en.wikipedia.org/wiki/CommonJS), or as a global variable.
###
((umd) ->
  # CommonJS
  return umd require "jquery" if typeof exports is "object"
  # AMD
  return define ["jquery"], umd if typeof define is "function" and define.amd
  # Global
  umd jQuery
) ($) ->

  ###
  # Filter elements by whether they have not yet been processed.
  #
  # @param {string} id - The data id used to determine whether the given
  # elements have already been processed or not.
  #
  # @return jQuery element collection of elements that have now run once by the
  # given id.
  #
  # @example
  # // Change the color of the text to green.
  # $('p').once('changecolor').css('color', 'green');
  ###
  $.fn.once = (id) ->
    # The id parameter is required.
    throw new Error("An ID is required when calling jQuery.once()") unless id

    # Build the name for the data identifier.
    name = "jquery-once-" + id

    # Filter the elements by which do not have the data yet.
    @filter ->
      $(this).data(name) isnt true
    .data name, true

  ###
  # Removes the once data from the given elements, based on the given ID.
  #
  # @param {string} id - A required string representing the name of the data id
  # which should be used when filtering the elements. This only filters elements
  # that have already been processed by the once function. The id should be the
  # same id that was originally passed to the `.once()` function.
  #
  # @return jQuery element collection that had their `once` data removed.
  # @example
  # // Remove the once
  # $('p').removeOnce('changecolor').each(function() {
  #   // This function is run for each element that had its once data removed.
  # });
  ###
  $.fn.removeOnce = (id) ->
    # Filter through the elements to find the once'd elements.
    @findOnce(id).removeData "jquery-once-" + id

  ###
  # Filters elements that have already been processed once.
  #
  # @param {string} id - A required string representing the name of the data id
  # which should be used when filtering the elements. This only filters elements
  # that have already been processed by the once function. The id should be the
  # same id that was originally passed to the `.once()` function.
  #
  # @return jQuery element collection of elements that have been run once.
  #
  # @example
  # // Remove the once
  # $('p').findOnce('changecolor').each(function() {
  #   // This function is run for each element that has already been run once.
  # });
  ###
  $.fn.findOnce = (id) ->
    # Filter the elements by which do have the data.
    name = "jquery-once-" + id
    @filter ->
      $(this).data(name) is true
