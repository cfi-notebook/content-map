var addEnds = require('./add-ends.js');

var fake = [
  {
    start: 1
  },
  {
    start: 10
  },
  {
    start: 50,
    end: 60
  }
];

test('adds ends', function () {
  var result = addEnds(fake);

  expect(result[0].end).toEqual(9);
  expect(result[1].end).toEqual(49);
});
