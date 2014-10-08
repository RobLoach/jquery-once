/*!
 * @file jQuery Once
 * @description Act on jQuery elements only once.
 * @version 2.0.0-alpha.6
 * @link http://github.com/robloach/jquery-once
 * @author Rob Loach (http://robloach.net)
 * @license MIT, GPL-2.0
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
  var uuid = 0;

  /**
   * Filter elements by whether they have not yet been processed.
   *
   * @param {string} [id]
   *   (Optional) The data id used to determine whether the given elements have
   *   already been processed or not.
   *
   *   When id is not provided, it becomes a unique identifier, depicted as a
   *   number. The element's data id will then be represented in the form of
   *   "jquery-once-#".
   * @returns jQuery element collection of elements that have now run once by
   *   the given id.
   *
   * @example
   * // Change the color to green only once.
   * $('p').once('changecolor').css('color', 'green');
   *
   * @see removeOnce
   * @see findOnce
   *
   * @public
   * @global
   */
  $.fn.once = function (id) {
    // Build the name for the data identifier. Generate a new unique id if the
    // id parameter is not provided.
    var name = 'jquery-once-' + (id || ++uuid);

    // Filter the elements by which do not have the data yet.
    return this.filter(function() {
      return $(this).data(name) !== true;
    }).data(name, true);
  };

  /**
   * Removes the once data from the given elements, based on the given ID.
   *
   * @param {string} id
   *   A required string representing the name of the data id which should be used
   *   when filtering the elements. This only filters elements that have already
   *   been processed by the once function. The id should be the same id that
   *   was originally passed to the once() function.
   *
   * @returns jQuery element collection of elements that now have their once
   *   data removed.
   *
   * @example
   * // Remove once data with the "changecolor" ID.
   * $('p').removeOnce('changecolor').each(function() {
   *   // This function is called for all elements that had their once removed.
   * });
   *
   * @see once
   *
   * @public
   * @global
   */
  $.fn.removeOnce = function (id) {
    // Filter through the elements to find the once'd elements.
    return this.findOnce(id).removeData('jquery-once-' + id);
  };

  /**
   * Filters elements that have already been processed once.
   *
   * @param {string} id
   *   A required string representing the name of the data id which should be used
   *   when filtering the elements. This only filters elements that have already
   *   been processed by the once function. The id should be the same id that
   *   was originally passed to the once() function.
   *
   * @returns jQuery element collection of elements that have been run once.
   *
   * @example
   * // Find all elements that have the changecolor'ed once.
   * $('p').findOnce('changecolor').each(function() {
   *   // This function is called for all elements that has already once'd.
   * });
   *
   * @see once
   *
   * @public
   * @global
   */
  $.fn.findOnce = function (id) {
    // Filter the elements by which do have the data.
    var name = 'jquery-once-' + id;

    return this.filter(function() {
      return $(this).data(name) === true;
    });
  };
}));
