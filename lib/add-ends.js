'use strict';

var flatten = require('lodash/flatten');
var last = require('lodash/last');

function addEnds(sections) {
  if (!last(sections).end) {
    throw new Error('last section must have an end attribute');
  }

  return sections.reduceRight(function (accumulator, el) {
    var previous;
    if (!Array.isArray(accumulator)) {
      previous = accumulator;
    } else {
      previous = accumulator[0];
    }

    if (!el.end) {
      el.end = parseInt(previous.start) - 1;
    }

    return flatten([el, accumulator]);
  });
}

module.exports = addEnds;
