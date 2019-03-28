'use strict';

/*
 * build an object out of section shorthand
 */
function section(shorthand) {
  if (typeof shorthand != 'string') {
    return shorthand; // must already be an object
  }

  var obj = {};
  var parts = shorthand.split('#');
  obj.ref = parts.shift();
  switch (parts.length) {
    case 2:
      obj.start = parseInt(parts.shift());
      obj.end = parseInt(parts.shift());
      break;
    case 1:
      obj.start = parseInt(parts.shift());
      break;
    default:
      throw new Error('invalid section shorthand');
  }
  return obj;
}

module.exports = section;
