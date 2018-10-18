const getChord = require('../src/get-chord');

describe('getChord', () => {
  test('5 in G major', () => {
    const scale = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'];
    expect(getChord({ scale, degree: '5', scaleType: 'major' })).toBe('D');
  });
  test('5 in Eb mixolydian', () => {
    const scale = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'];
    expect(getChord({ scale, degree: '5', scaleType: 'mixolydian' })).toBe('Bbm');
  });
});
