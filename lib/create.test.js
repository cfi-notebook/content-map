var create = require('./create.js');

test('is a function',function () {
  expect(create).toBeInstanceOf(Function);
});

test('create a basic book from objects',function () {
  var book = create({
    title: 'A Generic Handbook',
    sections: [
      {
        ref: 'Preface',
        start: 1
      },
      {
        ref: '1-1',
        start: 5
      },
      {
        ref: '1-2',
        start: 6,
        end: 6
      }
    ]
  });
  expect(book.sections[1]).toEqual({
    ref: '1-1',
    start: 5,
    end: 5
  });
});

test('create a basic book from shorthand',function () {
  var book = {
    title: 'A Generic Handbook',
    sections: [
      'Preface#1',
      '1-1#5',
      '1-2#6',
      '1-3#6#6' // last must have an end page
    ]
  };
  book = create(book);
  expect(book.sections[1]).toEqual({
    ref: '1-1',
    start: 5,
    end: 5
  });
});
