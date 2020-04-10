'use strict';

var create = require('./create');

function selectDoc(docs, selector) {
  var doc = docs.find(function (el) {
    return [el.title, el.slug].includes(selector);
  });

  if (!doc) {
    throw new Error(selector + ' doc not found');
  }

  return doc;
}

function createAll(docs) {
  var library = {};

  library.docs = docs.map((el) => create(el));

  library.titles = library.docs.map((el) => el.title);

  library.slugs = library.docs.map((el) => el.slug);

  library.select = function (selector) {
    var doc;
    if (selector.includes('@')) {
      var parts = selector.split('@');
      var docSelector = parts[0];
      var sectionSelector = parts[1];
      doc = selectDoc(library.docs, docSelector);
      var selection = doc.select(sectionSelector);
      return { doc, selection };
    }
    doc = selectDoc(library.docs, selector);
    return { doc };
  };

  return library;
}

module.exports = createAll;
