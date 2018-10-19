const Nashville = require('../index');

describe('Nashville class constructor', () => {

  test('creates with key', () => {
    const song = new Nashville('G major');
    expect(song.key).toBe('G major');
  });

  test('sets key root', () => {
    const song = new Nashville('G major');
    expect(song.keyRoot).toBe('G');
  });

  test('sets key type', () => {
    const song = new Nashville('G major');
    expect(song.keyType).toBe('major');
  });

  test('sets key scale', () => {
    const song = new Nashville('G major');
    expect(song.keyScale).toEqual(['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']);
  });

  test('updates key', () => {
    const song = new Nashville('G major');
    song.keyChange('Eb mixolydian');
    expect(song.key).toBe('Eb mixolydian');
  });

  test('updates key root', () => {
    const song = new Nashville('G major');
    song.keyChange('Eb mixolydian');
    expect(song.keyRoot).toBe('Eb');
  });

  test('updates key type', () => {
    const song = new Nashville('G major');
    song.keyChange('Eb mixolydian');
    expect(song.keyType).toBe('mixolydian');
  });

  test('updates key scale', () => {
    const song = new Nashville('G major');
    song.keyChange('Eb mixolydian');
    expect(song.keyScale).toEqual(['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb']);
  });
});
