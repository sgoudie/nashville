const Nashville = require('../index')

describe('getChord', () => {
  test('5 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord(5)).toBe('D')
  })

  test('5 in Eb mixolydian', () => {
    const song = new Nashville('Eb mixolydian')
    expect(song.getChord(5)).toBe('Bbm')
  })

  test('5/7 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('5/7')).toBe('D/F#')
  })

  test('5/7 in Eb mixolydian', () => {
    const song = new Nashville('Eb mixolydian')
    expect(song.getChord('5/7')).toBe('Bbm/Db')
  })

  test('no chord found returns "-"', () => {
    const song = new Nashville('G major')
    expect(song.getChord('broken string')).toBe('-')
  })

  test('5/ no bass', () => {
    const song = new Nashville('G major')
    expect(song.getChord('5/')).toBe('D/-')
  })

  test('flat 5 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('b5')).toBe('C#')
  })

  test('double flat 5 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('bb5')).toBe('C')
  })
  // Testing cycling back round note array
  test('flat 5 in F major', () => {
    const song = new Nashville('F major')
    expect(song.getChord('b5')).toBe('B')
  })

  test('sharp 5 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('#5')).toBe('D#')
  })

  test('double sharp 5 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('##5')).toBe('E')
  })
  // Testing cycling back round note array
  test('sharp 5 in E major', () => {
    const song = new Nashville('E major')
    expect(song.getChord('#5')).toBe('C')
  })

  test('5 maj 7 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('5(maj7)')).toBe('Dmaj7')
  })

  test('5 dominant 7 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('5(7)')).toBe('D7')
  })

  test('5 min 7 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('5-(7)')).toBe('Dm7')
  })

  test('5 9 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('5(9)')).toBe('D9')
  })

  test('5 13 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('5(13)')).toBe('D13')
  })

  test('5 add9 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('5(+9)')).toBe('Dadd9')
  })

  test('5 add13 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('5(+13)')).toBe('Dadd13')
  })

  test('5 sus2 in G major', () => {
    const song = new Nashville('G major')
    expect(song.getChord('5(s2)')).toBe('Dsus2')
  })
})
