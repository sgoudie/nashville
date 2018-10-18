var expect = require('chai').expect;
var nashville = require('../index');

describe('getSingleChord', function () {
  it('should return a single chord from a nns degree', function () {

    // 1. ARRANGE
    const root = 'G'
    const scaleType = 'major';
    const degree = ['5'];
    const chord = 'D'; // 5th degree of the G Major scale

    // 2. ACT
    const calculatedChord = nashville(root, scaleType, degree).chords[0];

    // 3. ASSERT
    expect(calculatedChord).to.be.equal(chord);

  });
});

describe('getChordSequence', function () {
  it('should return chords from a nns sequence', function () {

    // 1. ARRANGE
    const root = 'G'
    const scaleType = 'mixolydian';
    const sequence = [ '1', '5/7', '4', '2', '1', '7' ];
    const expectedChords = [ 'G', 'Dm/F', 'C', 'Am', 'G', 'F' ];

    // 2. ACT
    const { chords } = nashville(root, scaleType, sequence);

    // 3. ASSERT
    expect(chords).to.be.an('array').and.to.eql(expectedChords);

  });
});
