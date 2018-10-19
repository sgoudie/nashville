const Nashville = require('../index');

describe('getChords', () => {
  test('sequence in G major', () => {
    const nashville = new Nashville('G major');
    const sequence = ['6-', '5/7', '1', '4'];
    const correctChords = ['Em', 'D/F#', 'G', 'C'];

    expect(nashville.getChords(sequence)).toEqual(correctChords);
  });

  test('degrees in Eb mixolydian', () => {
    const nashville = new Nashville('Eb mixolydian');
    const sequence = ['6-', '5/7', '1', '4'];
    const correctChords = ['Cm', 'Bbm/Db', 'Eb', 'Ab'];

    expect(nashville.getChords(sequence)).toEqual(correctChords);
  });
});
