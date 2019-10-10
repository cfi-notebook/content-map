'use strict';

function exactMatch(r, str) {
  var match = str.match(r);
  return match && str === match[0];
}

module.exports = exactMatch;
