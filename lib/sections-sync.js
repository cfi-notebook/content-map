'use strict';

/*
 * build a synced sections list
 * assumed to be valid data by this point based on detection in create()
 * ie: sync#1#56
 */
function sectionsSync(sections) {
  var parts = sections[0].split('#');
  var start = parts[1];
  var end = parts[2];
  var arr = [];

  for (var i = start; i <= end; i++) {
    arr.push({
      ref: String(i),
      start: parseInt(i),
      end: parseInt(i)
    });
  }

  return arr;
}

module.exports = sectionsSync;
