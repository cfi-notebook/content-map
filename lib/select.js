'use strict';

function convertSequence(book,selector) {
}

function select(book,selector) {
  if (typeof selector === 'number') {
    selector = String(selector);
  }

  if (typeof selector === 'string') {
    if (selector.includes(',')) {
      return selector.split(',');
    }

    if (selector.includes('...')) {
      return convertSequence(book,selector);
    }
  }

  if (Array.isArray(selector)) {
    return selector;
  }

  throw new Error('invalid selector');
}

module.exports = select;
