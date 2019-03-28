'use strict';

var ContentMap = {};

ContentMap.create = require('./lib/create');
ContentMap.createFromYaml = require('./lib/create-from-yaml');
ContentMap.createAll = require('./lib/create-all');

module.exports = ContentMap;
