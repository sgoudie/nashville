const flatCheck = require('../lib/flat-check');

describe('flatCheck', () => {
  test('is true for F', () => {
    expect(flatCheck('F')).toBe(true);
  });

  test('is true for Eb', () => {
    expect(flatCheck('Eb')).toBe(true);
  });

  test('is false for D', () => {
    expect(flatCheck('D')).toBe(false);
  });

  test('is false for G#', () => {
    expect(flatCheck('G#')).toBe(false);
  });
});
