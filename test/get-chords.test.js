const getChords = require('../src/get-chords');

describe('getChords', () => {
  test('degrees in G major', () => {
    const scale = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'];
    const degrees = ['6-', '5/7', '1', '4'];
    const correctSequence = ['Em', 'D/F#', 'G', 'C'];

    const chords = getChords({scale, degrees, scaleType: 'major'});
    expect(chords).toEqual(correctSequence);
  });

  test('degrees in Eb mixolydian', () => {
    const scale = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'];
    const degrees = ['6-', '5/7', '1', '4'];
    const correctSequence = ['Cm', 'Bbm/Db', 'Eb', 'Ab'];

    const chords = getChords({scale, degrees, scaleType: 'mixolydian'});
    expect(chords).toEqual(correctSequence);
  });
});
