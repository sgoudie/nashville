const getScale = require('../src/get-scale');

describe('getScale', () => {
  test('is correct for G major', () => {
    const correctScale = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'];
    const scale = getScale('G', 'major');
    expect(scale).toEqual(correctScale);
  });

  test('is correct for Eb mixolydian', () => {
    const correctScale = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'];
    const scale = getScale('Eb', 'mixolydian');
    expect(scale).toEqual(correctScale);
  })
});
