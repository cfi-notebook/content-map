var ContentMap = require('../');

var library = ContentMap.createAllFromYaml(['book-1.yml','book-2.yml']);

console.log(library.select('book-2@1-1,1-3'));
