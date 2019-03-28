'use strict';

var ContentMap = {};

ContentMap.create = require('./lib/create');
ContentMap.createFromYaml = require('./lib/create-from-yaml');
ContentMap.createAll = require('./lib/create-all');
ContentMap.createAllFromYaml = require('./lib/create-all-from-yaml');

module.exports = ContentMap;
