const Nashville = require('../index');

describe('flatCheck', () => {
  test('is true for F', () => {
    const nashville = new Nashville('F major');
    expect(nashville.flatCheck()).toBe(true);
  });

  test('is true for Eb', () => {
    const nashville = new Nashville('Eb major');
    expect(nashville.flatCheck()).toBe(true);
  });

  test('is false for D', () => {
    const nashville = new Nashville('D major');
    expect(nashville.flatCheck()).toBe(false);
  });

  test('is false for G#', () => {
    const nashville = new Nashville('G# major');
    expect(nashville.flatCheck()).toBe(false);
  });
});
