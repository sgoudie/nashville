/* How the scale is constructed:
  - Whole tone: 2
  - Half tone: 1 */
module.exports = {
  major: {
    intervals: [2, 2, 1, 2, 2, 2, 1],
    triads: ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim']
  },
  minor: {
    intervals: [2, 1, 2, 2, 1, 2, 2],
    triads: ['min', 'dim', 'maj', 'min', 'min', 'maj', 'maj']
  },
  ionian: {
    intervals: [2, 2, 1, 2, 2, 2, 1],
    triads: ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim']
  },
  dorian: {
    intervals: [2, 1, 2, 2, 2, 1, 2],
    triads: ['min', 'min', 'maj', 'maj', 'min', 'dim', 'maj']
  },
  phrygian: {
    intervals: [1, 2, 2, 2, 1, 2, 2],
    triads: ['min', 'maj', 'maj', 'min', 'dim', 'maj', 'min']
  },
  lydian: {
    intervals: [2, 2, 2, 1, 2, 2, 1],
    triads: ['maj', 'maj', 'min', 'dim', 'maj', 'min', 'min']
  },
  mixolydian: {
    intervals: [2, 2, 1, 2, 2, 1, 2],
    triads: ['maj', 'min', 'dim', 'maj', 'min', 'min', 'maj']
  },
  aeolian: {
    intervals: [2, 1, 2, 2, 1, 2, 2],
    triads: ['min', 'dim', 'maj', 'min', 'min', 'maj', 'maj']
  },
  locrian: {
    intervals: [1, 2, 2, 1, 2, 2, 2],
    triads: ['dim', 'maj', 'min', 'min', 'maj', 'maj', 'min']
  }
}
