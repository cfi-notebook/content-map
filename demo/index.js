var fs   = require('fs');
var path = require('path');
var yaml = require('js-yaml');
var util = require('util');
var ContentMap = require('../index.js');

var file = path.resolve(__dirname,'a-generic-handbook.yml');

ContentMap.create(file)
  .then(function (book) {
  });

console.log(util.inspect(book,{
  showHidden: false,
  depth: null,
  colors: true
}));
