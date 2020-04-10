'use strict';

var fs = require('fs');
var yaml = require('js-yaml');
var createAll = require('./create-all');

function createAllFromYaml(filePaths) {
  var library = filePaths.map(function (filePath) {
    var fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.safeLoad(fileContents);
  });

  return createAll(library);
}

module.exports = createAllFromYaml;
