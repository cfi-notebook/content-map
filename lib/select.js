'use strict';

var findIndex = require('lodash/findIndex');
var flatten = require('lodash/flatten');
var uniq = require('lodash/uniq');

/*
 * given a first and last number, make that a sequence and return as array
 */
function makeNumberSequence(start, end) {
  var arr = [];

  for (var i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

/*
 * convert sequence into array using doc
 */
function convertSequence(doc, selector) {
  var parts = selector.split('...');

  if (parts.length != 2) {
    throw new Error(selector + ' is no a valid sequence selector');
  }

  var startRef = parts[0];
  var endRef = parts[1];

  var startIndex = findIndex(doc.sections, el => el.ref == startRef);
  var endIndex = findIndex(doc.sections, el => el.ref == endRef);

  var arr = [];

  for (var i = startIndex; i <= endIndex; i++) {
    arr.push(doc.sections[i]);
  }

  return arr.map(el => el.ref);
}

function toRefArray(doc, selector) {
  if (typeof selector === 'number') {
    selector = String(selector);
  }

  if (typeof selector === 'string') {
    if (selector.includes(',')) {
      return selector.split(',');
    }
    if (selector.includes('...')) {
      return convertSequence(doc, selector);
    }
    return [selector];
  }

  if (Array.isArray(selector)) {
    return selector;
  }

  throw new Error('invalid selector');
}

function select(doc, selector) {
  var refArray = toRefArray(doc, selector);

  var sections = doc.sections.filter(function(el) {
    return refArray.includes(el.ref);
  });

  var pages = sections.map(function(el) {
    return makeNumberSequence(el.start, el.end);
  });
  pages = flatten(pages);
  pages = uniq(pages);
  pages = pages.sort(function(a, b) {
    return a - b;
  });

  return { sections, pages };
}

module.exports = select;
