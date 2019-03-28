'use strict';

/*
 * returns boolean if string is exact match for regex
 */
function exactMatch(r,str) {
   var match = str.match(r);
   return match && str === match[0];
}

module.exports = exactMatch;
