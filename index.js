const noteLabels = require('./lib/note-labels');
const scaleLib = require('./lib/scales');
const isArray = require('./lib/is-array');

class Nashville {
  constructor(key) {
    this.key = key;
    this.keyRoot = key.split(' ')[0];
    this.keyType = key.split(' ')[1];
    this.keyScale = this.getScale();
  }

  set key(value) {
    this._key = value;
    this.keyRoot = value.split(' ')[0];
    this.keyType = value.split(' ')[1];
    this.keyScale = this.getScale();
  }

  get key() {
    return this._key;
  }

  flatCheck() {
    /* Check whether the key uses sharps and flats */
    const root = this.keyRoot;
    return root === 'F' || root.includes('b');
  }

  getScale() {
    const notes = this.flatCheck() ? noteLabels.flats : noteLabels.sharps;
    const { intervals } = scaleLib[this.keyType];
    const scale = [this.keyRoot];
    let lastIndex = notes.indexOf(this.keyRoot);

    intervals.forEach((int) => {
      let index = lastIndex + int;
      if (index >= notes.length) index = index - notes.length;
      scale.push(notes[index]);
      lastIndex = index;
    });
    // Set the scale before returning
    this.keyScale = scale;
    return scale;
  }

  getChord(degree) {
    if (typeof degree === 'number') degree = degree.toString();
    if (typeof degree !== 'string') throw new TypeError(`Invalid degree: ${degree} is a ${typeof degree} - must be a string`);

    const { triads } = scaleLib[this.keyType];
    const chordRoot = this.keyScale[degree[0] - 1];

    let chordType = '';
    if (degree.includes('-') || triads[degree[0] - 1] === 'min') {
      chordType = 'm'; // 'm' for minor
    }
    if (degree.includes('o') || triads[degree[0] - 1] === 'dim') {
      chordType = 'dim'; // 'dim' for diminished
    }
    // Support for slash, chords
    if (degree.includes('/')) {
      const bassDegree = degree[degree.indexOf('/') + 1];
      const bass = this.keyScale[bassDegree - 1];
      return `${chordRoot}${chordType}/${bass}`;
    }

    return `${chordRoot}${chordType}`;
  }

  getChords(sequence) {
    return sequence.map((degree) => this.getChord(degree));
  }
};

module.exports = Nashville;
