# @bearz/slices

## Overview

Slices enable working with slices of an array without resizing or
creating new arrays in most cases.  Instead, new slices are
created that that allows one to work with a segment of the
array.

They are not as effecient as go's `slice` or .NET's `Span<T>`, but
they do provide some benefits for dealing with smaller segments
of arrays or character slices.

The CharSlice and ReadOnlyCharSlice are specialized slice types
for working with string characters in their uint32 codepoint format
and provide string like methods such as trim, indexof, toUpper,
toLower, includes, and more without the need to convert them
back into strings to perform those operations.

The CharSlice and ReadOnlyCharSlice allow you to work with
strings without allocating multiple copies of immuatable strings
and allow you to make multiple transforms  before
converting back to a string.  

The case insensitive formats of methods end with "Fold" which
are based upon go's `SimpleFold` and `EqualFold` methods. For
example: `equalFold`, `startsWithFold`, `endsWithFold`, `indexOfFold`
perform case insensitive comparisons over strings or CharSliceLike
objects such as CharSlice or Uint32Arrays.

![logo](https://raw.githubusercontent.com/bearz-io/js/refs/heads/main/eng/assets/bearz.io.png)

[![JSR](https://jsr.io/badges/@bearz/slices)](https://jsr.io/@bearz/slices)
[![npm version](https://badge.fury.io/js/@bearz%2Fslices.svg)](https://badge.fury.io/js/@bearz%2Fslices)
[![GitHub version](https://badge.fury.io/gh/bearz-io%2Fjs-slices.svg)](https://badge.fury.io/gh/bearz-io%2Fjs-slices)

## Documentation

Documentation is available on [jsr.io](https://jsr.io/@bearz/slices/doc)

A list of other modules can be found at [github.com/bearz-io/js](https://github.com/bearz-io/js)

## Usage

```typescript
import * from slices from '@bearz/slices'

console.log(slices.equalIgnoreCase("left", "LeFT")); // true
console.log(slices.trimEnd("my random text...", ".")); // my random text
console.log(slices.underscore("first-place")); // first_place


var sb = new slices.CharArrayBuilder()
sb.append("test")
   .append(new TextEncoder().encode(": another test"));

// faster
sb.appendString("test")
  .appendUtf8Array(new TextEncoder().encode(": another test"))

console.log(sb.toString())
```

## Classes

- `CharArrayBuilder` - A builder for character arrays.
- `CharSlice` - A slice of characters.
- `Slice` - A slice of an array, which doesn't create a new array but
   acts as a view over the array.

## Functions

- `camelize` - converts a word to camel case.
- `capitalize` - capitalizes a word.
- `dasherize` - converts a word to hyphen/dash case.
- `endsWith` - determines if a string or char array ends with characters.
- `endsWithFold` - determines if a string or char array ends with characters using case insensitivity.
- `equalFold` - determines if a string or char array with characeters.
- `equal` -  determines if a string or char array with characters.
- `indexOfFold` - determines the index of a character or char array using case insensitivity.
- `indexOf` - determines the index of of a character or char array.
- `lastIndexOfFolder` - determines the last index of a character or char array using case insensitivity.
- `lastIndex` - determines the last index of a character or char array.
- `ordinalize` - converts word/number to the ordinal case.
- `pascalize` - converts a word to pascal case.
- `startsWithFold`

## License

[MIT License](./LICENSE.md)
