/*!
 * jQuery Once v2.1.3 Typescript Definition - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 * Author: Olavo Rocha Neto (github: olavorn)
 */

///<reference types="jquery" />

interface JQuery{
  once(id?:string): JQuery;
  removeOnce(id: string): JQuery;
  findOnce(id:string): JQuery;
}


