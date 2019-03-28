# @cfi-notebook/content-map

## Description

Our solution for selecting documents from a library of documents and
referencing sections or groups of sections in those documents.

## Definitions

### Document

A single document which has a section map and sections that can be selected.

### Library

A group of documents which can be selected by their title or slug.

### Section

A group of pages that can be referenced by their ref. For example, ref `3`, or
chapter 3, might be found on pages `54` through `69`, and ref `5-3-1` might be
found on pages `121` through `121`.

### Section Map

### Shorthand Reference

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

Sometimes a document has no section structure so just page numbers will be
used.  A single shorthand reference of `sync` along with the first and last
page is used to denote this situation. For example, `sync#1#56` would be used
to sync the section map to pages `1` through `56`.

## Usage

Set up a document using a YAML file.

```yaml
# a-generic-handbook.yml
title: A Generic Handbook
refs:
  - Preface#1
  - 1-4#8
  - 1-5#9
  - 1-6#10
  - 1-7#11
  - 1-8#12
  - 1-9#13
  - 1-10#14
  - 1-11#15
  - 1-12#16
  - 1-13#17
  - 1-14#18
  - 1-15#19
  - 2-1#20
  - 2-2#21
  - 2-3#22
  - 2-4#23
  - 2-5#24
  - 2-6#25
  - 2-7#26
  - 2-8#27
  - 2-9#28
  - 2-10#29
  - 2-11#30
  - 2-12#31
  - 3-1#32
  - 3-2#33
  - 3-3#34
  - 3-4#35
  - 3-5#36
  - 3-6#37
  - 3-7#38
  - 3-8#39
  - 3-9#40
  - 3-10#41
  - Appendix#42
```

```javascript
var path = require('path');
var ContentMap = require('@cfi-notebook/content-map');

var aGenericHandbook = ContentMap.createFromYaml(path.resolve(__dirname,'a-generic-handbook.yml'));
```
