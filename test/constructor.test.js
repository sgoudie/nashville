const Nashville = require('../index');

describe('Nashville class constructor', () => {

  test('creates with key', () => {
    const nashville = new Nashville('G major');
    expect(nashville.key).toBe('G major');
  });

  test('sets key root', () => {
    const nashville = new Nashville('G major');
    expect(nashville.keyRoot).toBe('G');
  });

  test('sets key type', () => {
    const nashville = new Nashville('G major');
    expect(nashville.keyType).toBe('major');
  });

  test('sets key scale', () => {
    const nashville = new Nashville('G major');
    expect(nashville.keyScale).toEqual(['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']);
  });

  test('updates key', () => {
    const nashville = new Nashville('G major');
    nashville.key = 'Eb mixolydian';
    expect(nashville.key).toBe('Eb mixolydian');
  });

  test('updates key root', () => {
    const nashville = new Nashville('G major');
    nashville.key = 'Eb mixolydian';
    expect(nashville.keyRoot).toBe('Eb');
  });

  test('updates key type', () => {
    const nashville = new Nashville('G major');
    nashville.key = 'Eb mixolydian';
    expect(nashville.keyType).toBe('mixolydian');
  });

  test('updates key scale', () => {
    const nashville = new Nashville('G major');
    nashville.key = 'Eb mixolydian';
    expect(nashville.keyScale).toEqual(['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb']);
  });
});
