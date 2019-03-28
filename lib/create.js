'use strict';

var select = require('./select');
var section = require('./section');
var addEnds = require('./add-ends');

function create(book={}) {
  if (!book.sections) {
    throw new Error('sections attribute is required');
  }

  book.sections = book.sections.map(function (el) {
    return section(el);
  });

  book.sections = addEnds(book.sections);

  book.select = function (selector) {
    return select(book,selector);
  };

  return book;
}

module.exports = create;
