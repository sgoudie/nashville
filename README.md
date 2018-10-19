# Nashville 🎸

A simple way to convert Nashville Number System (NNS) to chords based on the key.

## Install
```
npm install nashville --save
```

In your code:

```js
// import with es2015
import Nashville from 'nashville';

// load with require()
var Nashville = require('nashville');
```

## Usage

### Creating a new Nashville instance
```js
import Nashville from 'nashville';

const nashville = new Nashville('G major');

console.log(nashville.key); // => 'G major'
console.log(nashville.keyRoot); // => 'G'
console.log(nashville.keyType); // => 'major'
console.log(nashville.keyScale); // => [ 'G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G' ]
```

### Get a chord from a NNS degree
```js
import Nashville from 'nashville';

const nashville = new Nashville('G major');

console.log(nashville.getChord(5)); // => 'D'
console.log(nashville.getChord('5/7')); // => 'D/F#'
console.log(nashville.getChord('5-')); // => 'Dmin'
console.log(nashville.getChord('5o')); // => 'Ddim'
```

### Get a chords from a NNS degree sequence
```js
import Nashville from 'nashville';

const nashville = new Nashville('G major');

console.log(nashville.getChords([1, 4, 5, 1])); // => [ 'G', 'C', 'D', 'G' ]
console.log(nashville.getChords(['1', '5/7', '4', '2', '1', '7'])); // => [ 'G', 'D/F#', 'C', 'Am', 'G', 'F#dim' ]
```

### Change key
```js
import Nashville from 'nashville';

const nashville = new Nashville('G major');

console.log(nashville.getChords([1, 4, 5, 1])); // => [ 'G', 'C', 'D', 'G' ]

nashville.key('Eb mixolydian'); // updates key, keyRoot, keyType, and keyScale
console.log(nashville.getChords([1, 4, 5, 1])); // => [ 'Eb', 'Ab', 'Bbm', 'Eb' ]
```

### Degrees:
Degrees can can single numbers (5), or slash chords (`5/7`);

Major, minor, and diminished chords are set by the key, but can be overridden with:
- `4-` force a fourth minor chord
- `2o` force a diminished second chord

### Key Types:
- scales: `major` and `minor`
- modes: `ionian`, `dorian`, `phrygian`, `lydian`, `mixolydian`, `aeolian`, and `locrian`

## To-do list:
- Add support for accidentals
- Add support for 7ths
- Add support for extensions / additions (9, sus2, 13 etc);
