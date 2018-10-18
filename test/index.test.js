const nashville = require('../index');

test('A single chord gets returned from a single degree', () => {
  const chord = nashville('G', 'major', '5').chords[0];
  expect(chord).toBe('D');
});

test('A chord sequence gets returned from an array of degrees', () => {
  const degrees = [ '1', '5/7', '4', '2', '1', '7' ];
  const { chords } = nashville('G', 'mixolydian', degrees);

  expect(chords).toEqual([ 'G', 'Dm/F', 'C', 'Am', 'G', 'F' ]);
});
