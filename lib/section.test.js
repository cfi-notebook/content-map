var section = require('./section.js');

test('Preface#1',function () {
  expect(section('Preface#1')).toEqual({
    ref: 'Preface',
    start: 1
  });
});

test('Preface#1#2',function () {
  expect(section('Preface#1#2')).toEqual({
    ref: 'Preface',
    start: 1,
    end: 2
  });
});

test('1-1#1',function () {
  expect(section('1-1#1')).toEqual({
    ref: '1-1',
    start: 1
  });
});

test('1-5-1#36#37',function () {
  expect(section('1-5-1#36#37')).toEqual({
    ref: '1-5-1',
    start: 36,
    end: 37
  });
});
