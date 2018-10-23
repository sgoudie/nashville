const noteLabels = require('./lib/note-labels')
const scaleLib = require('./lib/scales')

class Nashville {
  constructor (key) {
    this.key = key
  }

  set key (value) {
    this._key = value
    this.keyRoot = value.split(' ')[0]
    this.keyType = value.split(' ')[1] || 'major'
    this.keyScale = this.getScale()
  }

  get key () {
    return this._key
  }

  flatCheck () {
    /* Check whether the key uses sharps and flats */
    const root = this.keyRoot
    return root === 'F' || root.includes('b')
  }

  keyChange (key) {
    this.key = key
  }

  getScale () {
    const notes = this.flatCheck() ? noteLabels.flats : noteLabels.sharps
    const { intervals } = scaleLib[this.keyType]
    const scale = [this.keyRoot]
    let lastIndex = notes.indexOf(this.keyRoot)

    intervals.forEach((int) => {
      let index = lastIndex + int
      if (index >= notes.length) index = index - notes.length
      scale.push(notes[index])
      lastIndex = index
    })
    // Set the scale before returning
    this.keyScale = scale
    return scale
  }

  getChord (degree) {
    if (typeof degree === 'number') degree = degree.toString()
    if (typeof degree !== 'string') throw new TypeError(`Invalid degree: ${degree} is a ${typeof degree} - must be a string`)

    let bass
    let bassDegree
    let chordDegree
    let chordRoot
    let accidental = 0
    let chordType = ''

    // Check for slash chord first and seperate out the bass
    if (degree.includes('/')) {
      const splitDegree = degree.split('/')
      chordDegree = splitDegree[0]
      bassDegree = splitDegree[1]
      // TODO: Check accidentals on the bassDegree
      bass = bassDegree ? this.keyScale[bassDegree - 1] : '-'
    } else {
      chordDegree = degree
    }

    // Check for accidentals (RESEARCH if chord triad needs to change)
    // Accidentals
    if (chordDegree.includes('b')) {
      accidental = chordDegree.includes('bb') ? -2 : -1
      // Remove b from chordDegree
      chordDegree.replace('b', '')
    }
    if (chordDegree.includes('#')) {
      accidental = chordDegree.includes('##') ? 2 : 1
      // Remove # from chordDegree
      chordDegree.replace('#', '')
    }

    // Check triad for root
    const { triads } = scaleLib[this.keyType]

    console.log(chordDegree)
    chordRoot = this.keyScale[chordDegree[0] - 1]

    if (accidental < 0) {
      console.log(accidental)
      const notes = this.flatCheck() ? noteLabels.flats : noteLabels.sharps
      const noteIndex = notes.indexOf(chordRoot)
      console.log(chordRoot)
      console.log(noteIndex)
      const flattenedIndex = noteIndex + accidental
      console.log(flattenedIndex)
      chordRoot = notes[flattenedIndex]
    }
    // Set chord

    // Check for forcing of m or dim
    // Check for 7th / extensions
    // Check for sus
    // Add type change

    // Force minor
    if (chordDegree.includes('-') || triads[chordDegree[0] - 1] === 'min') {
      chordType = 'm' // 'm' for minor
    }
    // Force diminished
    if (chordDegree.includes('o') || triads[chordDegree[0] - 1] === 'dim') {
      chordType = 'dim' // 'dim' for diminished
    }

    if (bass) {
      return `${chordRoot}${chordType}/${bass}`
    }

    return chordRoot ? `${chordRoot}${chordType}` : '-'
  }

  getChords (sequence) {
    return sequence.map((degree) => this.getChord(degree))
  }
}

module.exports = Nashville
