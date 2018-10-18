const noteLabels = require('./src/lib/note-labels');
const scaleLib = require('./src/lib/scales');
const isArray = require('./src/lib/is-array');

const getScale = require('./src/get-scale');
const getChord = require('./src/get-chord');
const getChords = require('./src/get-chords');


module.exports = function nashville(root, scaleType, degrees) {
  if (typeof root !== 'string') throw new TypeError('Root must be a string - e.g. "G#"');
  if (typeof scaleType !== 'string') throw new TypeError('Scale type must be a string - e.g. "major"');

  let chords;
  const scale = getScale(root, scaleType);

  if (isArray(degrees)) {
    chords = getChords({ scale, degrees, scaleType });
  } else {
    const degree = degrees; // If it's not an array, it's a single degree.
    const chord = getChord({ scale, degree, scaleType });
    chords = [chord];
  }

  return {
    key: `${root} ${scaleType}`,
    scale,
    degrees,
    chords,
  };
};
