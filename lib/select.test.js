var select = require('./select.js');

// fake book
var book = {
  sections: [
  ]
};

test('is a function',function () {
  expect(select).toBeInstanceOf(Function);
});

// test('select chapter 1',function () {
//   expect(select(book,1)).toEqual(['1']);
// });
