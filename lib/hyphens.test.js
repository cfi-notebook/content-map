var hyphens = require('./hyphens');

test('works with string',function () {
  var str = 'slkjdf';
  expect(hyphens(str)).toEqual(str);
});

test('works with endashes',function () {
  expect(hyphens('1–1–1')).toEqual('1-1-1');
});

test('works with emdashes',function () {
  expect(hyphens('1—1—1')).toEqual('1-1-1');
});

test('works with numbers',function () {
  expect(hyphens(1)).toEqual('1');
});
