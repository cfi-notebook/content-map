'use strict';

var fs = require('fs');
var yaml = require('js-yaml');
var create = require('./create');

function createFromYaml(filePath) {
  var fileContents = fs.readFileSync(filePath,'utf8');
  var obj = yaml.safeLoad(fileContents);
  var book = create(obj);
  return book;
}

module.exports = createFromYaml;
