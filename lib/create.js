'use strict';

var select = require('./select');

function create(book={}) {
  if (book.sections) {
    // iterate over sections building objects out of shorthand sections
  }
  else {
    book.sections = [];
  }

  book.select = function (selector) {
    return select(book,selector);
  };

  return book;
}

module.exports = create;
