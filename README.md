# Nashville 🎸

*Currently in development*

A simple function that parses the Nashville Number System (NNS) to chords based on the key.

## Install
```
npm install nashville --save
```

In your code:

```js
// import with es2015
import nashville from 'nashville';

// load with require()
var nashville = require('nashville');
```

## Usage

```js
import nashville from 'nashville';

// nashville(root, scaleType, sequence)
nashville('G', 'major', ['1', '5/7', '4', '2', '1', '7']);
/*
=> {
  key: 'G major',
  scale: [ 'G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G' ],
  sequence: [ '1', '5/7', '4', '2', '1', '7' ],
  chords: [ 'G', 'D/F#', 'C', 'Am', 'G', 'F#dim' ]
}
*/

nashville('Eb', 'mixolydian', ['1', '5/7', '4', '2', '1', '7']);
/*
=> {
  key: 'Eb mixolydian',
  scale: [ 'Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb' ],
  sequence: [ '1', '5/7', '4', '2', '1', '7' ],
  chords: [ 'Eb', 'Bbm/Db', 'Ab', 'Fm', 'Eb', 'Db' ]
}
*/
```

### Chords:
Chords can can single numbers (`5`), or slash chords (`5/7`);

Major, minor, and diminished chords are set by the key, but can be overridden with:
- `4-` force a fourth minor chord
- `2o` force a diminished second chord

### Scale Types:
- scales: `major` and `minor`
- modes: `ionian`, `dorian`, `phrygian`, `lydian`, `mixolydian`, `aeolian`, and `locrian`
