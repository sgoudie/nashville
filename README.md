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

// nashville(root, scaleType, degrees)
nashville('G', 'major', ['1', '5/7', '4', '2', '1', '7']);
/*
=> {
  key: 'G major',
  scale: [ 'G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G' ],
  degrees: [ '1', '5/7', '4', '2', '1', '7' ],
  chords: [ 'G', 'D/F#', 'C', 'Am', 'G', 'F#dim' ]
}
*/

nashville('Eb', 'mixolydian', ['1', '5/7', '4', '2', '1', '7']);
/*
=> {
  key: 'Eb mixolydian',
  scale: [ 'Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb' ],
  degrees: [ '1', '5/7', '4', '2', '1', '7' ],
  chords: [ 'Eb', 'Bbm/Db', 'Ab', 'Fm', 'Eb', 'Db' ]
}
*/

// It works for single degrees too
nashville('G', 'major', '5');
/*
=> {
  key: 'G major',
  scale: [ 'G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G' ],
  degrees: '5',
  chords: [ 'D' ]
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

## To-do list:
- Add support for accidentals
- Add support for 7ths
- Add support for extensions / additions (9, sus2, 13 etc);
