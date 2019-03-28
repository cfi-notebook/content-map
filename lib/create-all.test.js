var createAll = require('./create-all');

var library = [];

library.push({
  title: 'A Generic Handbook Volume 1',
  slug: 'agh1',
  sections: ['sync#1#2']
});

library.push({
  title: 'A Generic Handbook Volume 2',
  slug: 'agh2',
  sections: ['sync#1#2']
});

library.push({
  title: 'A Generic Handbook Volume 3',
  slug: 'agh3',
  sections: ['sync#1#2']
});

library = createAll(library);

test('sanity check',function () {
  expect(createAll).toBeInstanceOf(Function);
  expect(library.select).toBeInstanceOf(Function);
  expect(library.docs.length).toEqual(3);
  expect(library.titles.length).toEqual(3);
  expect(library.slugs.length).toEqual(3);
});

test('select document',function () {
  expect(library.select('agh1').doc.title).toEqual('A Generic Handbook Volume 1');
});

test('select document and selection of sections',function () {
  var found = library.select('agh1@1');
  expect(found.doc.title).toEqual('A Generic Handbook Volume 1');
  expect(found.selection.length).toEqual(1);
  expect(found.selection[0].ref).toEqual('1');
});
