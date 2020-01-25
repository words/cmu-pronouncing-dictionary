# `cmu-pronouncing-dictionary`

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

The 134,000+ words and their pronunciations in the CMU pronouncing dictionary.

> The CMU Pronouncing Dictionary (also known as cmudict) is a public domain
> pronouncing dictionary created by Carnegie Mellon University (CMU).
> It defines a mapping from English words to their North American
> pronunciations, and is commonly used in speech processing applications.

Crawled from [`cmusphinx/cmudict`][cmudict].

## Install

[npm][]:

```sh
npm install cmu-pronouncing-dictionary
```

## Use

```js
var cmu = require('cmu-pronouncing-dictionary')

console.log(cmu)
```

Yields:

```js
{
  a: 'AH0',
  'a(1)': 'EY1',
  "a's": 'EY1 Z',
  'a.': 'EY1',
  "a.'s": 'EY1 Z',
  'a.s': 'EY1 Z',
  a42128: 'EY1 F AO1 R T UW1 W AH1 N T UW1 EY1 T',
  aa: 'EY2 EY1',
  aaa: 'T R IH2 P AH0 L EY1',
  aaberg: 'AA1 B ER0 G',
  aachen: 'AA1 K AH0 N',
  aachener: 'AA1 K AH0 N ER0',
  aah: 'AA1',
  aaker: 'AA1 K ER0',
  aaliyah: 'AA2 L IY1 AA2',
  aalseth: 'AA1 L S EH0 TH',
  aamodt: 'AA1 M AH0 T',
  aancor: 'AA1 N K AO2 R',
  // …and many more
}
```

## API

### `cmuPronouncingDictionary`

`Object.<string>` — Map of English words to [ARPABET][] phonetic transcription
codes.

Note that sometimes there are multiple possible pronunciations.
Those are represented as `$word($counter)`, like so:

```js
{
  // …
  "unnatural": "AH0 N N AE1 CH ER0 AH0 L",
  "unnaturally": "AH0 N N AE1 CH ER0 AH0 L IY0",
  "unnaturally(2)": "AH0 N N AE1 CH ER0 L IY0",
  "unnaturally(3)": "AH0 N AE1 CH ER0 L IY0",
  "unnaturally(4)": "AH0 N N AE1 CH R AH0 L IY0",
  "unnecessarily": "AH0 N N EH1 S AH0 S EH2 R AH0 L IY0",
  "unnecessary": "AH0 N N EH1 S AH0 S EH2 R IY0",
  // …
}
```

## License

[ISC][license] © [Zeke Sikelianos][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/words/cmu-pronouncing-dictionary.svg

[build]: https://travis-ci.org/words/cmu-pronouncing-dictionary

[downloads-badge]: https://img.shields.io/npm/dm/cmu-pronouncing-dictionary.svg

[downloads]: https://www.npmjs.com/package/cmu-pronouncing-dictionary

[size-badge]: https://img.shields.io/bundlephobia/minzip/cmu-pronouncing-dictionary.svg

[size]: https://bundlephobia.com/result?p=cmu-pronouncing-dictionary

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://zeke.sikelianos.com

[cmudict]: https://github.com/cmusphinx/cmudict

[arpabet]: https://en.wikipedia.org/wiki/ARPABET
