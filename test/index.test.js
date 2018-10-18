const nashville = require('../index');

describe('A Nashville object is returned from', () => {
  test('A single chord', () => {
    const chord = nashville('G', 'major', '5').chords[0];
    expect(chord).toBe('D');
  });

  test('A chord sequence', () => {
    const degrees = [ '1', '5/7', '4', '2', '1', '7' ];
    const { chords } = nashville('G', 'mixolydian', degrees);

    expect(chords).toEqual([ 'G', 'Dm/F', 'C', 'Am', 'G', 'F' ]);
  });
});
