'use strict';

function convertSequence(book,selector) {
  // TODO
}

function toRefArray(book,selector) {
  if (typeof selector === 'number') {
    selector = String(selector);
  }

  if (typeof selector === 'string') {
    if (selector.includes(',')) {
      return selector.split(',');
    }
    else if (selector.includes('...')) {
      return convertSequence(book,selector);
    }
    else {
      return [selector];
    }
  }

  if (Array.isArray(selector)) {
    return selector;
  }

  throw new Error('invalid selector');
}

function select(book,selector) {
  var refArray = toRefArray(book,selector);

  return book.sections.filter(function (el) {
    return refArray.includes(el.ref);
  });
}

module.exports = select;
