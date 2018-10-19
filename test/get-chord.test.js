const Nashville = require('../index');

describe('getChord', () => {
  test('5 in G major', () => {
    const nashville = new Nashville('G major');
    expect(nashville.getChord(5)).toBe('D');
  });

  test('5 in Eb mixolydian', () => {
    const nashville = new Nashville('Eb mixolydian');
    expect(nashville.getChord(5)).toBe('Bbm');
  });

  test('5/7 in G major', () => {
    const nashville = new Nashville('G major');
    expect(nashville.getChord('5/7')).toBe('D/F#');
  });

  test('5/7 in Eb mixolydian', () => {
    const nashville = new Nashville('Eb mixolydian');
    expect(nashville.getChord('5/7')).toBe('Bbm/Db');
  });
});
