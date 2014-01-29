/**
 * jQuery Once Plugin 1.2.6
 * http://github.com/robloach/jquery-once
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function (factory) {
  "use strict";
  if (typeof exports === 'object') {
    factory(require('jquery'));
  } else if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(jQuery);
  }
}(function ($) {
  "use strict";
  var cache = {}, uuid = 0;

  /**
   * Filters elements by whether they have not yet been processed.
   *
   * @param id
   *   (Optional) If this is a string, then it will be used as the CSS class
   *   name that is applied to the elements for determining whether it has
   *   already been processed. The elements will get a class in the form of
   *   "id-processed".
   *
   *   If the id parameter is a function, it will be passed off to the fn
   *   parameter and the id will become a unique identifier, represented as a
   *   number.
   *
   *   When the id is neither a string or a function, it becomes a unique
   *   identifier, depicted as a number. The element's class will then be
   *   represented in the form of "jquery-once-#-processed".
   *
   *   Take note that the id must be valid for usage as an element's class name.
   * @param fn
   *   (Optional) If given, this function will be called for each element that
   *   has not yet been processed. The function's return value follows the same
   *   logic as $.each(). Returning true will continue to the next matched
   *   element in the set, while returning false will entirely break the
   *   iteration.
   *
   * @api public
   */
  $.fn.once = function (id, fn) {
    if (typeof id !== 'string') {
      // Generate a numeric ID if the id passed can't be used as a CSS class.
      if (!(id in cache)) {
        cache[id] = ++uuid;
      }
      // When the fn parameter is not passed, we interpret it from the id.
      if (!fn) {
        fn = id;
      }
      id = 'jquery-once-' + cache[id];
    }

    /**
     * Adds the ID at the end of attribute value.
     */
    function addID (index, value) {
      return $.trim((value || '') + ' ' + id);
    }

    var elements = this
      // Remove elements from the set that have already been processed.
      .not('[data-jquery-once~="' + id + '"]')
      .attr('data-jquery-once', addID);

    return $.isFunction(fn) ? elements.each(fn) : elements;
  };

  /**
   * Filters elements that have been processed once already.
   *
   * @param id
   *   A required string representing the name of the class which should be used
   *   when filtering the elements. This only filters elements that have already
   *   been processed by the once function. The id should be the same id that
   *   was originally passed to the once() function.
   * @param fn
   *   (Optional) If given, this function will be called for each element that
   *   has not yet been processed. The function's return value follows the same
   *   logic as $.each(). Returning true will continue to the next matched
   *   element in the set, while returning false will entirely break the
   *   iteration.
   *
   * @api public
   */
  $.fn.removeOnce = function (id, fn) {
    /**
     * Removes the ID from the attribute value.
     */
    function removeID (index, value) {
      return $.trim(value.replace(id, ''))
        // Split and join to keep the value clean.
        .split(/\s+/g)
        .join(' ');
    }

    var elements = this
      .filter('[data-jquery-once~="' + id + '"]')
      .attr('data-jquery-once', removeID);

    return $.isFunction(fn) ? elements.each(fn) : elements;
  };
}));
