# Nashville 🎸

A simple way to convert Nashville Number System (NNS) to chords based on the key.

## Install
```
npm install nashville --save
```

In your code:

```js
// import with es2015
import Nashville from 'nashville'

// load with require()
var Nashville = require('nashville')
```

## Usage

### Creating a new Nashville instance
```js
import Nashville from 'nashville'

const song = new Nashville('G major')

song.key // => 'G major'
song.keyRoot // => 'G'
song.keyType // => 'major'
song.keyScale // => [ 'G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G' ]
```

### Get a chord from a NNS degree
```js
import Nashville from 'nashville'

const song = new Nashville('G major')

song.getChord(5) // => 'D'
song.getChord('5/7') // => 'D/F#'
song.getChord('5-') // => 'Dmin'
song.getChord('5o') // => 'Ddim'
```

### Get a chords from a NNS degree sequence
```js
import Nashville from 'nashville'

const song = new Nashville('G major')

song.getChords([1, 4, 5, 1]) // => [ 'G', 'C', 'D', 'G' ]
song.getChords(['1', '5/7', '4', '2', '1', '7']) // => [ 'G', 'D/F#', 'C', 'Am', 'G', 'F#dim' ]
```

### Change key
```js
import Nashville from 'nashville'

const song = new Nashville('G major')

song.getChords([1, 4, 5, 1]) // => [ 'G', 'C', 'D', 'G' ]

song.keyChange('Eb mixolydian') // updates key, keyRoot, keyType, and keyScale
song.getChords([1, 4, 5, 1]) // => [ 'Eb', 'Ab', 'Bbm', 'Eb' ]
```

### Degrees:
Degrees can can single numbers (5), or slash chords (`5/7`)

Major, minor, and diminished chords are set by the key, but can be overridden with:
- `4-` force a fourth minor chord
- `2o` force a diminished second chord

### Accidentals
**1.3.0** comes with support for accidentals. Use `b, bb, #, ##` to include non-diatonic chords.

```js
const song = new Nashville('G major')
song.getChord(5) //=> D
song.getChord('b5') //=> C#
song.getChord('bb5') //=> C
song.getChord('#5') //=> D#
song.getChord('##5') //=> E
```

### Sevenths, extensions & additions
**1.3.0** comes with support for extensions & additions. To prevent confusion between roots and extensions, wrap the extension parentheses.

```js
const song = new Nashville('G major')
// Sevenths
song.getChord(5) //=> D
song.getChord('5(maj7)') //=> Dmaj7
song.getChord('5(7)') //=> D7
song.getChord('5-(7)') //=> Dm7
// Extensions
song.getChord('5(5)' //=> D5
song.getChord('5(9)' //=> D9
song.getChord('5(maj13)' //=> Dmaj13
song.getChord('5(13)' //=> D13
song.getChord('5(+9)' //=> Dadd9
song.getChord('5(s2)' //=> sus2
song.getChord('5(s4)' //=> sus4
```

### Key Types
- scales: `major` and `minor`
- modes: `ionian`, `dorian`, `phrygian`, `lydian`, `mixolydian`, `aeolian`, and `locrian`

## To-do list
- Capo
- Degree from chord
- Workout triads from scale

---

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
