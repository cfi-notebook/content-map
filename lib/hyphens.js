'use strict';

// replace all endashes and emdashes with hyphens
function hyphens(str) {
  str = String(str);
  str = str.replace(/–/g, '-'); // replace endashes with hyphens
  str = str.replace(/—/g, '-'); // replace emdashes with hyphens
  return str;
}

module.exports = hyphens;
