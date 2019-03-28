var create = require('./create');

// fake book
var book = create({
  title: 'A Generic Handbook',
  sections: [
    '1-1#1',
    '1-2#2',
    '1-3#3',
    '2-1#4',
    '2-2#5',
    '2-3#6',
    '3-1#7#7'
  ]
});

test('select chapter 1',function () {
  expect(book.select('1-1')).toEqual([
    {
      ref: '1-1',
      start: 1,
      end: 1
    }
  ]);
});
