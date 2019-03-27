'use strict';

var select = require('./select');

function create(book={}) {
  if (!book.sections) {
    book.sections = [];
  }

  book.select = function (selector) {
    return select(book,selector);
  };

  return book;
}

module.exports = create;
