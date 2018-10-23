const Nashville = require('../index')

describe('getChords', () => {
  test('sequence in G major', () => {
    const song = new Nashville('G major')
    const sequence = ['6-', '5/7', '1', '4']
    const correctChords = ['Em', 'D/F#', 'G', 'C']

    expect(song.getChords(sequence)).toEqual(correctChords)
  })

  test('degrees in Eb mixolydian', () => {
    const song = new Nashville('Eb mixolydian')
    const sequence = ['6-', '5/7', '1', '4']
    const correctChords = ['Cm', 'Bbm/Db', 'Eb', 'Ab']

    expect(song.getChords(sequence)).toEqual(correctChords)
  })
})
