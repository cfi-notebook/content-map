'use strict';

var select = require('./select');
var section = require('./section');
var addEnds = require('./add-ends');
var slugify = require('@ryanburnette/slugify');
var sectionsSync = require('./sections-sync');

function create(doc={}) {
  if (!doc.title) {
    throw new Error('title attribute is requireed');
  }

  if (!doc.slug) {
    doc.slug = slugify(doc.title);
  }

  if (!doc.sections) {
    throw new Error('sections attribute is required');
  }

  if (doc.sections.length == 1 && typeof doc.sections[0] == 'string' && doc.sections[0].includes('sync')) {
    doc.sections = sectionsSync(doc.sections);
  }
  else {
    doc.sections = doc.sections.map(function (el) {
      return section(el);
    });
  }

  doc.sections = addEnds(doc.sections);

  doc.select = function (selector) {
    return select(doc,selector);
  };

  return doc;
}

module.exports = create;
