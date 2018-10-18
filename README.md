# Nashville Parser 🎸

*IN DEVELOPMENT*

Parsing the Nashville Number System (NNS) to chords based on the key.

- Enter your root and scale / mode
- Enter your sequence of chords as comma separated NNS degrees
- `key`, `scale`, `sequence`, and `chords` are returned

So root `G` with a `major` scale and the sequence `['1', '5/7', '4', '2', '1', '7']` would return:

```js
{
  key: 'G major',
  scale: [ 'G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G' ],
  sequence: [ '1', '5/7', '4', '2', '1', '7' ],
  chords: [ 'G', 'D/F#', 'C', 'Am', 'G', 'F#dim' ]
}
```

Major, minor, and diminished chords are set by the key, but can be overridden with:
- `4-` would produce a fourth minor chord
- `2o` would produce a diminished second chord

## Keys:
- major + minor scales
- modes (ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian)
