/* Note labels for alternate names */
const noteLabels = {
  sharps: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  flats: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
};

/* How the scale is constructed:
  - Whole tone: 2
  - Half tone: 1 */
const scaleLib = {
  major: {
    intervals: [2, 2, 1, 2, 2, 2, 1],
    triads: ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'],
  },
  minor: {
    intervals: [2, 1, 2, 2, 1, 2, 2],
    triads: ['min', 'dim', 'maj', 'min', 'min', 'maj', 'maj'],
  },
  ionian: {
    intervals: [2, 2, 1, 2, 2, 2, 1],
    triads: ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'],
  },
  dorian: {
    intervals: [2, 1, 2, 2, 2, 1, 2],
    triads: ['min', 'min', 'maj', 'maj', 'min', 'dim', 'maj'],
  },
  phrygian: {
    intervals: [1, 2, 2, 2, 1, 2, 2],
    triads: ['min', 'maj', 'maj', 'min', 'dim', 'maj', 'min'],
  },
  lydian: {
    intervals: [2, 2, 2, 1, 2, 2, 1],
    triads: ['maj', 'maj', 'min', 'dim', 'maj', 'min', 'min'],
  },
  mixolydian: {
    intervals: [2, 2, 1, 2, 2, 1, 2],
    triads: ['maj', 'min', 'dim', 'maj', 'min', 'min', 'maj'],
  },
  aeolian: {
    intervals: [2, 1, 2, 2, 1, 2, 2],
    triads: ['min', 'dim', 'maj', 'min', 'min', 'maj', 'maj'],
  },
  locrian: {
    intervals: [1, 2, 2, 1, 2, 2, 2],
    triads: ['dim', 'maj', 'min', 'min', 'maj', 'maj', 'min'],
  }
};

const isArray = (data) => Object.prototype.toString.call(data) == '[object Array]';

/* Check whether the key uses sharps and flats */
const flatCheck = (root) => {
  return root === 'F' || root.includes('b');
};

const getScale = ({ root, scaleType }) => {
  const notes = flatCheck(root) ? noteLabels.flats : noteLabels.sharps;
  const { intervals } = scaleLib[scaleType];
  const scale = [root];
  let lastIndex = notes.indexOf(root);

  intervals.forEach((int) => {
    let index = lastIndex + int;
    if (index >= notes.length) index = index - notes.length;
    scale.push(notes[index]);
    lastIndex = index;
  });

  return scale;
};

const getChord = ({ scale, degree, scaleType }) => {
  if (typeof degree !== 'string') throw new TypeError(`Invalid degree: ${degree} is a ${typeof degree} - must be a string`);

  const { triads } = scaleLib[scaleType];
  const chordRoot = scale[degree[0] - 1];

  let chordType = '';

  if (degree.includes('-') || triads[degree[0] - 1] === 'min') {
    chordType = 'm'; // 'm' for minor
  }

  if (degree.includes('o') || triads[degree[0] - 1] === 'dim') {
    chordType = 'dim'; // 'dim' for diminished
  }

  // Support for slas1, chords
  if (degree.includes('/')) {
    const bassdegree = degree[degree.indexOf('/') + 1];
    const bass = scale[bassdegree - 1];
    return `${chordRoot}${chordType}/${bass}`;
  }

  return `${chordRoot}${chordType}`;
};

const parseDegrees = ({ root, scaleType, degrees }) => {
  const chords = [];
  const scale = getScale({ root, scaleType });

  if (isArray(degrees)) {
    degrees.forEach((degree) => {
      const chord = getChord({ scale, degree, scaleType });
      chords.push(chord);
    });
  } else {
    const degree = degrees; // If it's not an array, it's a single degree.
    const chord = getChord({ scale, degree, scaleType });
    chords.push(chord);
  }

  return {
    key: `${root} ${scaleType}`,
    scale,
    degrees,
    chords,
  };
};


module.exports = function nashville(root, scaleType, degrees) {
  if (typeof root !== 'string') throw new TypeError('Root must be a string - e.g. "G#"');
  if (typeof scaleType !== 'string') throw new TypeError('Scale type must be a string - e.g. "major"');

  return parseDegrees({ root, scaleType, degrees });
};
