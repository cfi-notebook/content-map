'use strict';

/*
 * build an object out of section shorthand
 */
function section(shorthand) {
  var obj = {};
  var parts = shorthand.split('#');
  obj.ref = parts.shift();
  switch (parts.length) {
    case 2:
      obj.start = parts.shift();
      obj.end = parts.shift();
      break;
    case 1:
      obj.start = parts.shift();
      break;
    default:
      throw new Error('invalid section shorthand');
  }
  return obj;
}

module.exports = section;
