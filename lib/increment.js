'use strict';

var hyphens = require('./hyphens');

function detectType(str) {
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

function exactMatch(r,str) {
   var match = str.match(r);
   return match && str === match[0];
}

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
