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

  getNoteFromIndex (index) {
    const notes = this.flatCheck() ? noteLabels.flats : noteLabels.sharps
    if (index >= notes.length) index = index - notes.length
    else if (index < 0) index = notes.length + index
    return notes[index]
  }

  getScale () {
    const { intervals } = scaleLib[this.keyType]
    const notes = this.flatCheck() ? noteLabels.flats : noteLabels.sharps
    const scale = [this.keyRoot]
    let lastIndex = notes.indexOf(this.keyRoot)

    intervals.forEach((int) => {
      let index = lastIndex + int
      scale.push(this.getNoteFromIndex(index))
      lastIndex = index
    })
    // Set the scale before returning
    this.keyScale = scale
    return scale
  }

  getDegreeAttributes (degree) {
    let bassDegree
    let chordDegree
    let isSlash = false
    let accidental = 0
    let extension = ''
    let sus = 0
    let add = 0

    // Check for slash chord first and seperate out the bass
    if (degree.includes('/')) {
      const splitDegree = degree.split('/')
      chordDegree = splitDegree[0]
      bassDegree = splitDegree[1]
      isSlash = true
      // TODO: Check accidentals on the bassDegree
    } else {
      chordDegree = degree
    }

    // Set accidentals and santise the chordDegree string
    if (chordDegree.includes('b')) {
      accidental = chordDegree.includes('bb') ? -2 : -1
      // Remove b from chordDegree
      chordDegree = chordDegree.replace(/b/g, '')
    }
    if (chordDegree.includes('#')) {
      accidental = chordDegree.includes('##') ? 2 : 1
      // Remove # from chordDegree
      chordDegree = chordDegree.replace(/#/g, '')
    }

    // Set extension + sus
    if (chordDegree.includes('(')) {
      let extBlock = chordDegree.split('(')[1]
      // Support for add11 and add 13
      const formatExtensionNumber = (index) => {
        const firstDigit = extBlock[index]
        // You never extend or alter with a 1
        return firstDigit === '1' ? `${firstDigit}${extBlock[index + 1]}` : firstDigit
      }
      // Handle sus
      if (extBlock.includes('s')) {
        sus = extBlock[extBlock.indexOf('s') + 1]
      }
      // Handle add
      if (extBlock.includes('+')) {
        const extIndex = extBlock.indexOf('+') + 1
        add = formatExtensionNumber(extIndex)
      }
      // Handle major 7th
      if (extBlock.includes('maj')) {
        const extIndex = extBlock.indexOf('maj') + 'maj'.length
        extension = `maj${formatExtensionNumber(extIndex)}`
      } else if (!isNaN(Number(extBlock[0]))) {
        const extIndex = 0
        extension = formatExtensionNumber(extIndex)
      }
      // Remove () section from chordDegree
      chordDegree = chordDegree.split('(')[0]
    }

    return { bassDegree, chordDegree, isSlash, accidental, extension, sus, add }
  }

  getChord (degree) {
    if (typeof degree === 'number') degree = degree.toString()
    if (typeof degree !== 'string') throw new TypeError(`Invalid degree: ${degree} is a ${typeof degree} - must be a string`)

    const {
      bassDegree,
      chordDegree,
      isSlash,
      accidental,
      extension,
      sus,
      add
    } = this.getDegreeAttributes(degree)

    // SET CHORD
    const bassRoot = bassDegree ? this.keyScale[bassDegree - 1] : '-'
    let chordRoot = this.keyScale[chordDegree[0] - 1]
    // Handle accidentals
    if (chordRoot && accidental !== 0) {
      const notes = this.flatCheck() ? noteLabels.flats : noteLabels.sharps
      const noteIndex = notes.indexOf(chordRoot)
      chordRoot = this.getNoteFromIndex(noteIndex + accidental)
    }

    // Check for forcing of m or dim
    const { triads } = scaleLib[this.keyType]
    let chordType
    // Force minor
    if (chordDegree.includes('-') || triads[chordDegree[0] - 1] === 'min') {
      chordType = 'm' // 'm' for minor
    }
    // Force diminished
    if (chordDegree.includes('o') || triads[chordDegree[0] - 1] === 'dim') {
      chordType = 'dim' // 'dim' for diminished
    }

    const chord = `${chordRoot}${chordType || ''}${extension || ''}${add ? `add${add}` : ''}${sus ? `sus${sus}` : ''}`

    if (isSlash) {
      return `${chord}/${bassRoot}`
    }

    return chordRoot ? chord : '-'
  }

  getChords (sequence) {
    return sequence.map((degree) => this.getChord(degree))
  }
}

module.exports = Nashville
