var sectionsSync = require('./sections-sync');

test('works',function () {
  var sections = ['sync#1#3'];
  sections = sectionsSync(sections);

  expect(sections).toEqual([
    {
      ref: '1',
      start: 1,
      end: 1
    },
    {
      ref: '2',
      start: 2,
      end: 2
    },
    {
      ref: '3',
      start: 3,
      end: 3
    }
  ]);
});
