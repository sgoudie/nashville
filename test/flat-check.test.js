const Nashville = require('../index');

describe('flatCheck', () => {
  test('is true for F', () => {
    const song = new Nashville('F major');
    expect(song.flatCheck()).toBe(true);
  });

  test('is true for Eb', () => {
    const song = new Nashville('Eb major');
    expect(song.flatCheck()).toBe(true);
  });

  test('is false for D', () => {
    const song = new Nashville('D major');
    expect(song.flatCheck()).toBe(false);
  });

  test('is false for G#', () => {
    const song = new Nashville('G# major');
    expect(song.flatCheck()).toBe(false);
  });
});
