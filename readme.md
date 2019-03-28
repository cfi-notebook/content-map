# @cfi-notebook/content-map

## Description

Our solution for selecting documents from a library of documents and
referencing sections or groups of sections in those documents.

## Definitions

### Document

A document is an object that has a title, slug, array of sections, and any
other attributes you wish. It has a select function which can select a subset
of sections.

### Library

A library is an object which has an array of documents and a selector that can
both select documents and sections within a selected document.

### Section

A group of pages that can be referenced by their ref. For example, ref `3`, or
chapter 3, might be found on pages `54` through `69`, and ref `5-3-1` might be
found on pages `121` through `121`.

### Section Map

The section map is the data structure which maps a ref such as `1-1` to a page
number.

### Shorthand Reference

A shorthand reference is a way of using a string to select one or more
sections. For example, `1-1,1-2` would section sections `1-1` and `1-2`. See
the usage examples for more detail.

## Reference Types

### String

A reference can be a String, for example, 'Preface' is a string reference.
String references cannot be incremented.

### Chapter

A reference can be a chapter, for example, `2` would reference chapter 2 that
might be found on page 20. The return value is always a string.

### Ref-Ref

References such as `1-1` or `6-2-5` are "ref-ref" references. The digits after
the last hyphen are incremented. Endashes and emdashes are replaced with
hyphens.

### Sync

Sometimes a document has no section structure so we will revert to using page
numbers as refs. A single shorthand reference of `sync` along with the first
and last page is used to denote this situation. For example, `sync#1#56` would
be used to sync the section map to pages `1` through `56`.

## Usage

Include the library. Intended for use in Node, but it would work in the browser
if consumed by something like Webpack to package and transpile via babel.

```javascript
var ContentMap = require('@cfi-notebook/content-map');
```

### Create Document from Object

```javascript
var document = ContentMap.create({
  title: 'A Generic Handbook',
  sections: [
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
  ]
});
```

### Create Document from Shorthand

```javascript
var document = ContentMap.create({
  title: 'A Generic Handbook',
  sections: [
    '1-1#1',
    '1-2#2',
    '1-3#3#3' // last section must have a start and end
  ]
});
```

### Create Document Using Sync

```javascript
var document = ContentMap.create({
  title: 'A Generic Handbook',
  sections: [
    'sync#1#50'
  ]
});
```

### Create Library of Documents

```javascript
var library = ContentMap.createAll([
  {
    title: 'A Generic Handbook',
    sections: ['sync#1#50']
  },
  {
    title: 'Some Other Handbook',
    sections: ['sync#1#50']
  }
]);
```

### Select Sections of a Document

#### Single Section

```javascript
document.select('1-1');
```

#### Multiple Sections

```javascript
document.select('1-1,1-2'); // multiple sections separated by commas
```

#### Series of Sections

```javascript
document.select('1-1...1-2'); // series of section from/to separated by ...
```
