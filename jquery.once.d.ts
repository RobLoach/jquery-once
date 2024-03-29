/*!
 * jQuery Once v2.3.0 Typescript Definition - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 * Author: Olavo Rocha Neto (github: olavorn)
 */

///<reference types="jquery" />

interface JQuery {

  /**
   * Filter elements that have yet to be processed by the given data ID.
   *
   * @param {string} [id=once]
   *   The data ID used to determine whether the given elements have already
   *   been processed or not. Defaults to `'once'`.
   *
   * @returns jQuery collection of elements that have now run once by
   *   the given ID.
   *
   * @example
   * ``` javascript
   * // The following will change the color of each paragraph to red, just once
   * // for the 'changecolor' key.
   * $('p').once('changecolor').css('color', 'red');
   *
   * // .once() will return a set of elements that yet to have the once ID
   * // associated with them. You can return to the original collection set by
   * // using .end().
   * $('p')
   *   .once('changecolorblue')
   *     .css('color', 'blue')
   *   .end()
   *   .css('color', 'red');
   *
   * // To execute a function on the once set, you can use jQuery's each().
   * $('div.calendar').once().each(function () {
   *   // Since there is no once ID provided here, the key will be 'once'.
   * });
   * ```
   *
   * @see removeOnce
   * @see findOnce
   * @this jQuery
   *
   * @global
   * @public
   */
  once(id?: string): JQuery;

  /**
   * Removes the once data from elements, based on the given ID.
   *
   * @param {string} [id=once]
   *   A string representing the name of the data ID which should be used when
   *   filtering the elements. This only filters elements that have already been
   *   processed by the once function. The ID should be the same ID that was
   *   originally passed to the once() function. Defaults to `'once'`.
   *
   * @returns jQuery collection of elements that were acted upon to remove their
   *    once data.
   *
   * @example
   * ``` javascript
   * // Remove once data with the 'changecolor' ID. The result set is the
   * // elements that had their once data removed.
   * $('p').removeOnce('changecolor').css('color', '');
   *
   * // Any jQuery function can be performed on the result set.
   * $('div.calendar').removeOnce().each(function () {
   *   // Remove the calendar behavior.
   * });
   * ```
   *
   * @see once
   * @this jQuery
   *
   * @global
   * @public
   */
  removeOnce(id: string): JQuery;

  /**
   * Filters elements that have already been processed once.
   *
   * @param {string} [id=once]
   *   A string representing the name of the data id which should be used when
   *   filtering the elements. This only filters elements that have already
   *   been processed by the once function. The id should be the same id that
   *   was originally passed to the once() function. Defaults to 'once'.
   *
   * @returns jQuery collection of elements that have been run once.
   *
   * @example
   * ``` javascript
   * // Find all elements that have been changecolor'ed once.
   * $('p').findOnce('changecolor').each(function () {
   *   // This function is called for all elements that has already once'd.
   * });
   *
   * // Find all elements that have been acted on with the default 'once' key.
   * $('p').findOnce().each(function () {
   *   // This function is called for all elements that have been acted on with
   *   // a 'once' action.
   * });
   * ```
   *
   * @see once
   * @this jQuery
   *
   * @global
   * @public
   */
  findOnce(id: string): JQuery;
}


