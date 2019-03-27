var create = require('./create.js');

test('is a function',function () {
  expect(create).toBeInstanceOf(Function);
});

test('has an empty sections array',function () {
  var book = create();
  expect(book.sections).toEqual([]);
});
