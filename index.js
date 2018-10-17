/* Note labels for alternate names */
const noteLabels = {
  sharps: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  flats: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
};

/* How the scale is constructed:
  - Whole tone: 2
  - Half tone: 1 */
const scaleIntervals = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
  ionian: [2, 2, 1, 2, 2, 2, 1],
  aeolian: [2, 1, 2, 2, 1, 2, 2]
};

/* Check whether the key uses sharps and flats */
const flatCheck = (root) => {
  return root === 'F' || root.includes('b');
};

const getScale = ({ root, scaleType }) => {
  const notes = flatCheck(root) ? noteLabels.flats : noteLabels.sharps;
  const intervals = scaleIntervals[scaleType];
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

const getChord = ({ scale, number }) => {
  let type = 'maj';
  if (number.includes('-')) {
    type = 'min';
  }
  const scaleNumber = number.replace('-', '');
  const chordRoot = scale[scaleNumber - 1];
  console.log(number);
  return `${chordRoot}${type}`;
};

const parseSequence = ({ sequence, root, scaleType }) => {
  const chords = [];
  const scale = getScale({ root, scaleType });

  sequence.forEach((number) => {
    const chord = getChord({ scale, number });
    chords.push(chord);
  });

  return {
    key: `${root} ${scaleType}`,
    scale,
    sequence,
    chords,
  };
};

const result = parseSequence({
  sequence: ['6-', '4', '2-', '1'],
  root: 'G',
  scaleType: 'major'
});

console.log(result);
