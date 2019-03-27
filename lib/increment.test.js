var increment = require('./increment.js');

test('increment chapter as number',function () {
  expect(increment(1)).toEqual('2');
});

test('increment chapter as string',function () {
  expect(increment('1')).toEqual('2');
});

test('increment ref-ref',function () {
  expect(increment('1-1')).toEqual('1-2');
});

test('increment ref-ref-ref',function () {
  expect(increment('1-1-9')).toEqual('1-1-10');
});

test('increment ref-ref-ref',function () {
  expect(increment('1-1-10')).toEqual('1-1-11');
});
