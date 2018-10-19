const Nashville = require('../index');

describe('getChord', () => {
  test('5 in G major', () => {
    const song = new Nashville('G major');
    expect(song.getChord(5)).toBe('D');
  });

  test('5 in Eb mixolydian', () => {
    const song = new Nashville('Eb mixolydian');
    expect(song.getChord(5)).toBe('Bbm');
  });

  test('5/7 in G major', () => {
    const song = new Nashville('G major');
    expect(song.getChord('5/7')).toBe('D/F#');
  });

  test('5/7 in Eb mixolydian', () => {
    const song = new Nashville('Eb mixolydian');
    expect(song.getChord('5/7')).toBe('Bbm/Db');
  });
});
