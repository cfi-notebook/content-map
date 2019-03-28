'use strict';

var hyphens = require('./hyphens');
var exactMatch = require('./exact-match');
var detectType = require('./detect-ref-type');

function increment(ref) {
  ref = hyphens(ref);

  var type = detectType(ref);

  if (type == 'string') {
    throw new Error('string refs cannot be incremented');
  }

  if (type == 'ref') {
    return String(parseInt(ref)+1); 
  }

  if (type.startsWith('ref-ref')) {
    var parts = ref.split('-');
    var val = parts.pop();
    val = parseInt(val);
    val++;
    parts.push(val);
    return parts.join('-');
  }

  throw new Error(ref + ' caused an unhandled error when trying to increment');
}

module.exports = increment;
