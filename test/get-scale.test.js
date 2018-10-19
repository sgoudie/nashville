const Nashville = require('../index');

describe('getScale', () => {
  test('is correct for G major', () => {
    const song = new Nashville('G major');
    const correctScale = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'];
    expect(song.getScale()).toEqual(correctScale);
  });

  test('is correct for Eb mixolydian', () => {
    const song = new Nashville('Eb mixolydian');
    const correctScale = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'];
    expect(song.getScale()).toEqual(correctScale);
  })
});
