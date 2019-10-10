var create = require('./create');

// fake doc
var doc = create({
  title: 'A Generic Handbook',
  sections: ['1-1#1', '1-2#2', '1-3#3', '2-1#4', '2-2#5', '2-3#6', '3-1#7#7']
});

test('select single 1-1', function() {
  expect(doc.select('1-1').sections).toEqual([
    {
      ref: '1-1',
      start: 1,
      end: 1
    }
  ]);
});

test('select 1-1 and 1-2', function() {
  expect(doc.select('1-1,1-2').sections).toEqual([
    {
      ref: '1-1',
      start: 1,
      end: 1
    },
    {
      ref: '1-2',
      start: 2,
      end: 2
    }
  ]);
});

test('select 1-1,1-2,2-1', function() {
  expect(doc.select('1-1,1-2,2-1').sections).toEqual([
    {
      ref: '1-1',
      start: 1,
      end: 1
    },
    {
      ref: '1-2',
      start: 2,
      end: 2
    },
    {
      ref: '2-1',
      start: 4,
      end: 4
    }
  ]);
});

test('select 1-1...1-3', function() {
  expect(doc.select('1-1...1-3').sections).toEqual([
    {
      ref: '1-1',
      start: 1,
      end: 1
    },
    {
      ref: '1-2',
      start: 2,
      end: 2
    },
    {
      ref: '1-3',
      start: 3,
      end: 3
    }
  ]);
});

test('select 1-3...2-1', function() {
  expect(doc.select('1-3...2-1').sections).toEqual([
    {
      ref: '1-3',
      start: 3,
      end: 3
    },
    {
      ref: '2-1',
      start: 4,
      end: 4
    }
  ]);
});

test('creates a list of pages', function() {
  var doc = create({
    title: 'A Generic Handbook',
    sections: [
      '1-1#1#3',
      '1-2#4',
      '1-3#5',
      '2-1#6#10',
      '2-2#11',
      '2-3#12',
      '3-1#13#20'
    ]
  });
  expect(doc.select('1-1,2-1,3-1').pages).toEqual([
    1,
    2,
    3,
    6,
    7,
    8,
    9,
    10,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ]);
});
