const scaleLib = require('./lib/scales');

module.exports = ({ scale, degree, scaleType }) => {
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
