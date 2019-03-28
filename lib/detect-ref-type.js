'use strict';

var hyphens = require('./hyphens');
var exactMatch = require('./exact-match');

function detectRefType(str) {
  str = hyphens(str);

  if (exactMatch(/\d*/,str)) {
    return 'ref';
  }

  if (exactMatch(/\d*-\d*/,str)) {
    return 'ref-ref';
  }

  if (exactMatch(/\d*-\d*-\d*/,str)) {
    return 'ref-ref-ref';
  }

  return 'string';
}

module.exports = detectRefType;
